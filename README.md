# CCFIL App

Next.js (App Router, SSR) on **AWS Amplify Gen 2**, deployed to AWS Amplify Hosting.

- **Production:** [ccfil.com](https://ccfil.com) — served by the `gen2-main` branch

- **Region:** `us-east-1`

> Migrated from Amplify Gen 1 in August 2026. The Gen 1 CLI (`amplify`) does **not** work on this project — the Gen 2 CLI is `ampx`. Any tutorial or Stack Overflow answer using `amplify push`, `amplify env`, or `aws-exports.js` is describing the old system and will not apply here. Gen 1 documentation lives under `docs.amplify.aws/gen1/`; make sure you aren't reading it by accident.

---

## Step 1 — Prerequisites

**Node.js 20 LTS or newer.** Required by `aws-cdk-lib`. Use a version manager rather than a system install, so this project's requirement doesn't conflict with other work:

- [fnm](https://github.com/Schniz/fnm) — fast, works on macOS, Linux, and Windows
- [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [volta](https://volta.sh) — cross-platform, pins versions per project

```bash
fnm install 20 && fnm use 20
node --version      # v20.x or higher
```

**npm.** Ships with Node. No separate install.

**Git.** Any recent version.

**AWS CLI v2.** Installers for macOS, Linux, and Windows:
<https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html>
The v1 CLI is not sufficient.

```bash
aws --version       # aws-cli/2.x
```

---

## Step 2 — AWS credentials

This project uses the `amplify-dev` IAM user, which has the nessessary policies attatched:

### Creating an access key

If you don't already have a key pair, create one in the AWS Console:

1. Sign in to the AWS Console.
2. Go to **IAM** → **Users** → **amplify-dev**.
3. Open the **Security credentials** tab.
4. Under *Access keys*, choose **Create access key**.
5. Select **Command Line Interface (CLI)** as the use case, acknowledge the recommendation notice, and continue.
6. Optionally add a description tag such as `local-dev-<your-name>` — helpful later when identifying which key to revoke.
7. Choose **Create access key**.
8. **Copy the secret access key now, or download the `.csv`.** It is displayed exactly once and cannot be retrieved afterward. If you lose it, delete the key and create a new one.

If you have console access through a different admin identity, the CLI equivalent is:

```bash
aws iam create-access-key --user-name amplify-dev
```

An IAM user can hold at most two access keys. If both slots are full, deactivate and delete an unused one first — and if you're replacing a departing developer's key, delete theirs rather than adding a third.

### Configuring the CLI

```bash
aws configure --profile amplify-dev
# AWS Access Key ID:     <your key id>
# AWS Secret Access Key: <your secret>
# Default region name:   us-east-1
# Default output format: json
```

**The region matters.** Every resource in this project lives in `us-east-1`. A profile defaulting elsewhere causes commands to return empty results rather than errors, which is a confusing way to lose an afternoon.

```bash
aws sts get-caller-identity --profile amplify-dev    # expect account 703381884667
aws configure get region --profile amplify-dev       # expect us-east-1
```

Either set `AWS_PROFILE=amplify-dev` in your shell, or pass `--profile amplify-dev` to every command. Examples below assume the former.

---

## Step 3 — First run

```bash
git clone <repo-url>
cd ccfil-app
npm install
```

You now need backend configuration. There are two ways to get it, and the choice matters.

### Option A — pull config from a deployed branch

Reads the configuration of an already-deployed environment. Fast, provisions nothing.

```bash
npx ampx generate outputs --app-id dymon2l90oqk2 --branch gen2-dev
npm run dev
```

This writes `amplify_outputs.json` (gitignored) and points you at the **shared dev backend**. Data you create there is visible to anyone else working against that branch.

> Never run this against `gen2-main` for local development. That points your local machine at production Cognito, production S3, and production data.

### Option B — your own sandbox

Provisions a personal, isolated backend in AWS. Slower to start, but you can change the schema without affecting anything else.

```bash
npx ampx sandbox
```

Leave it running — it watches `amplify/` and redeploys on change, and writes `amplify_outputs.json` for you. In a second terminal, run `npm run dev`.

Delete it when you're finished. Sandboxes are per-developer and cost money while they exist:

```bash
npx ampx sandbox delete
```

Use Option B whenever you're touching anything under `amplify/`. Use Option A for frontend-only work.

---

## Step 4 — How environments work

Gen 2's central idea: **a branch is an environment.** Connecting a Git branch to Amplify Hosting provisions a complete backend for it — its own AppSync API, Cognito user pool, S3 bucket, and Lambda functions. There is no separate "backend environment" to select, and no `amplify env` command.

- **`gen2-main`** — production. Serves ccfil.com. Live data and users.
- **`gen2-dev`** — shared integration testing. Its own isolated backend.
- **`feat/*`** — individual work. Its own backend if connected in Amplify, otherwise a local sandbox.

The DynamoDB tables, Cognito user pool, and S3 bucket used by production were carried over from Gen 1 during the migration and belong to `gen2-main`. Non-production branches get fresh, empty equivalents.

---

## Step 5 — Read this before connecting a branch

**This app does not currently read `amplify_outputs.json` for its backend configuration.** It reads `NEXT_PUBLIC_*` environment variables set at the Amplify *app* level — and app-level variables are inherited by every branch.

The consequence: a new branch deploys with its own empty backend, but the running app ignores it and talks to **production** instead. Nothing errors. Test signups become real users, test uploads land in live content, and test mutations write to production tables.

Variables affected:

- `NEXT_PUBLIC_API_ENDPOINT` and `NEXT_PUBLIC_API_KEY` — point at production AppSync
- `NEXT_PUBLIC_COGNITO_USER_POOL_ID` and `NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID` — point at the production user pool
- `NEXT_PUBLIC_S3_BUCKET`, `NEXT_PUBLIC_S3_BUCKET_DOMAIN`, `NEXT_PUBLIC_S3_BUCKET_URL` — point at the production bucket

### Until this is fixed

After a branch's first build, override every one of them at branch level, using values from that branch's own configuration:

```bash
npx ampx generate outputs --app-id dymon2l90oqk2 --branch <your-branch>
cat amplify_outputs.json      # source of the correct values

aws amplify update-branch --app-id dymon2l90oqk2 --branch-name <your-branch> \
  --environment-variables \
NEXT_PUBLIC_API_ENDPOINT=<url>,NEXT_PUBLIC_API_KEY=<key>,NEXT_PUBLIC_COGNITO_USER_POOL_ID=<id>,NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID=<id>,NEXT_PUBLIC_S3_BUCKET=<bucket>
```

`update-branch` **replaces** the entire variable map — include everything you want set, not only what's changing. Then rebuild, and confirm in browser devtools that the `x-api-key` header on a GraphQL request matches your branch's key rather than production's.

### The real fix

Move `Amplify.configure()` onto `amplify_outputs.json`, which Gen 2 generates per branch at build time with the correct values, then delete the app-level `NEXT_PUBLIC_*` backend variables. Branch isolation becomes automatic and this entire section goes away.

Non-backend variables (`SENDGRID_API_KEY`, `GOOGLE_RECAPTCHA_*`, `BESTNOTES_*`, `IMAGES_URL`) are genuine application config and stay as environment variables — or better, move to Amplify secrets.

```bash
grep -rn "COGNITO_USER_POOL_ID\|S3_BUCKET" --include=*.ts --include=*.tsx --exclude-dir=node_modules .
```

---

## Step 6 — Workflow

Deployment is push-driven. Every connected branch rebuilds and redeploys on push, with no manual step:

```
feat/my-thing  ──▶  gen2-dev  ──▶  gen2-main
  isolated          shared         production
  backend           integration    ccfil.com
```

**Feature work.** Branch from `gen2-dev` as `feat/<name>`. Develop against a sandbox (Step 3, Option B) if you're changing anything in `amplify/`, otherwise against shared dev.

You don't need to connect a feature branch in Amplify at all for frontend-only work — a sandbox plus `npm run dev` covers it. Connect one only when you need a deployed URL, and if you do, apply the Step 5 overrides immediately afterward.

**Merge to `gen2-dev`.** Pushing triggers a build and deploy. Verify on the dev URL:

- The feature itself
- Sign in and sign out
- Any page that loads S3 images
- **Public pages in a private window, logged out** — anonymous and authenticated access follow different authorization rules, so a logged-in test will not catch a broken public read

**Merge to `gen2-main`.** This is production; ccfil.com updates within a few minutes of the push. Before merging, be confident the feature has had real use on `gen2-dev`, and that any backend schema change has been tested against realistic data.

Afterward, verify on `ccfil.com` itself rather than the branch URL. Custom domains route through a different distribution, and SSR cookie handling is domain-sensitive in ways the `*.amplifyapp.com` host won't reveal.

**Cleaning up.** Delete the feature branch in Git, and if you connected it in Amplify, disconnect it there too. Disconnecting tears down its backend; leaving it connected leaves resources running and billing.

---

## Step 7 — Project layout

```
amplify/              Gen 2 backend definition (TypeScript, deployed via CDK)
  auth/               Cognito — user pool, triggers, external providers
  data/               AppSync GraphQL schema and authorization rules
  storage/            S3
  function/           Lambda functions (ESM only — no `exports.handler`)
  api/                REST API (API Gateway)
  backend.ts          Composition root; wires the above together
app/                  Next.js App Router
amplify.yml           Amplify Hosting build spec — overrides console build settings
amplify_outputs.json  Generated, gitignored. Never commit.
```

**Lambda functions must be ESM.** Use `export async function handler(event)`, not `exports.handler = ...`. Gen 2's shims break CommonJS.

**`amplify.yml` beats the console.** Because this file exists in the repo, it overrides the build settings shown in the Amplify console for any branch that has it. Edit the file, not the console — console edits apply to every branch, production included.

---

## Step 8 — Reverting production

Amplify retains previous builds. In the console, open the app, select `gen2-main`, find the last good build, and choose **Redeploy this version**. Faster than a revert commit for a frontend-only problem.

If the bad deploy changed anything under `amplify/`, redeploying alone may not undo the backend change. Revert the commit and let a normal build run.

---

## Step 9 — Operational notes

**Content editing.** The site owner manages team members and page content through the Amplify console's data browser. Content rows reference S3 objects by key. Renaming models or fields in `amplify/data/resource.ts` will break his workflow — talk to him first.

**The S3 bucket `ccfil-app-storage-4da25038161600-staging`** holds production images despite the `-staging` suffix, which is inherited from Gen 1 naming. It is live production content. Do not delete it because the name looks stale.

---

## Step 10 — Troubleshooting

**Build fails on permissions.** Hosting builds run as the app's *service role*, not your credentials. Confirm `AmplifyBackendDeployFullAccess` is attached to it.

**`amplify: command not found`, or Gen 1 commands failing.** Correct — this is a Gen 2 project. Use `npx ampx`.

**`amplify_outputs.json` missing.** It's generated and never committed. Run `npx ampx generate outputs` or `npx ampx sandbox`.

**Sandbox fails on first run.** The account needs CDK bootstrapping: `npx cdk bootstrap aws://703381884667/us-east-1`. This is usually already done.

**Local changes to `amplify/` don't appear.** `npx ampx sandbox` must be running to deploy them. `npm run dev` alone only serves the frontend.

**A branch shows production data.** See Step 5 — its environment variables are inherited from the app level.

---

## Further reading

- Gen 2 documentation: <https://docs.amplify.aws/nextjs/> — confirm you are **not** on a `/gen1/` URL
- `gen1-to-gen2-migration-runbook.md` — how this project reached its current state, and why several things are the way they are
