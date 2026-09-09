import { defineFunction } from '@aws-amplify/backend';
import type { Backend } from '../../backend';
import { branchName } from '../../branch-name';

export const ccfilappVerifyAuthChallengeResponse = defineFunction({
  entry: './index.js',
  name: `ccfilappVerifyAuthChallengeResponse-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    RECAPTCHASECRET: '6LfOox8pAAAAAPiJb_acB-aeqsIa8nPjBzVjdWK4',
    MODULES: 'captcha-verify',
    ENV: `${branchName}`,
    REGION: 'us-east-1',
  },
  runtime: 18,
});

export function applyEscapeHatches(backend: Backend) {
  backend.ccfilappVerifyAuthChallengeResponse.resources.cfnResources.cfnFunction.functionName = `ccfilappVerifyAuthChallengeResponse-${branchName}`;
}
