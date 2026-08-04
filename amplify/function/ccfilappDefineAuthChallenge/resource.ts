import { defineFunction } from '@aws-amplify/backend';
import type { Backend } from '../../backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const ccfilappDefineAuthChallenge = defineFunction({
  entry: './index.js',
  name: `ccfilappDefineAuthChallenge-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    MODULES: 'captcha-define-challenge',
    ENV: `${branchName}`,
    REGION: 'us-east-1',
  },
  runtime: 18,
});

export function applyEscapeHatches(backend: Backend) {
  backend.ccfilappDefineAuthChallenge.resources.cfnResources.cfnFunction.functionName = `ccfilappDefineAuthChallenge-${branchName}`;
}
