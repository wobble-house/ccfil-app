import * as AdminQueries from './api/AdminQueries/resource';
import * as data from './data/resource';
import * as auth from './auth/resource';
import * as AdminQueriesd838de2e from './function/AdminQueriesd838de2e/resource';
import * as ccfilapp62c969fa from './function/ccfilapp62c969fa/resource';
import * as ccfilappCreateAuthChallenge from './function/ccfilappCreateAuthChallenge/resource';
import * as ccfilappCustomMessage from './function/ccfilappCustomMessage/resource';
import * as ccfilappDefineAuthChallenge from './function/ccfilappDefineAuthChallenge/resource';
import * as ccfilappVerifyAuthChallengeResponse from './function/ccfilappVerifyAuthChallengeResponse/resource';
import * as storage from './storage/resource';
import { defineBackend } from '@aws-amplify/backend';
import { Tags } from 'aws-cdk-lib';

const backend = defineBackend({
  data: data.data,
  auth: auth.auth,
  AdminQueriesd838de2e: AdminQueriesd838de2e.AdminQueriesd838de2e,
  ccfilapp62c969fa: ccfilapp62c969fa.ccfilapp62c969fa,
  ccfilappCreateAuthChallenge: ccfilappCreateAuthChallenge.ccfilappCreateAuthChallenge,
  ccfilappCustomMessage: ccfilappCustomMessage.ccfilappCustomMessage,
  ccfilappDefineAuthChallenge: ccfilappDefineAuthChallenge.ccfilappDefineAuthChallenge,
  ccfilappVerifyAuthChallengeResponse: ccfilappVerifyAuthChallengeResponse.ccfilappVerifyAuthChallengeResponse,
  storage: storage.storage,
});

export type Backend = typeof backend;

AdminQueries.defineAdminQueriesApi(backend);

data.applyEscapeHatches(backend);
auth.applyEscapeHatches(backend);
AdminQueriesd838de2e.applyEscapeHatches(backend);
ccfilapp62c969fa.applyEscapeHatches(backend);
ccfilappCreateAuthChallenge.applyEscapeHatches(backend);
ccfilappCustomMessage.applyEscapeHatches(backend);
ccfilappDefineAuthChallenge.applyEscapeHatches(backend);
ccfilappVerifyAuthChallengeResponse.applyEscapeHatches(backend);
storage.applyEscapeHatches(backend);

export function postRefactor() {
  storage.postRefactor(backend);
  Tags.of(backend.stack).add('gen2-migration/post-refactor', 'true');
}

// Uncomment after refactor
// postRefactor();
