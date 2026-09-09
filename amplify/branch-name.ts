// CDK resource names only allow alphanumeric characters, dashes, underscores, and spaces.
// Git branch names (e.g. `fix/amplify-outputs-config`) can contain `/`, which breaks deploys.
export const branchName = (process.env.AWS_BRANCH ?? 'sandbox').replace(
  /[^a-zA-Z0-9-]/g,
  '-'
);
