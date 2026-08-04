import { defineFunction } from '@aws-amplify/backend';
import type { Backend } from '../../backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const ccfilappCreateAuthChallenge = defineFunction({
  entry: './index.js',
  name: `ccfilappCreateAuthChallenge-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    MODULES: 'captcha-create-challenge',
    CHALLENGEANSWER: '',
    ENV: `${branchName}`,
    REGION: 'us-east-1',
  },
  runtime: 18,
});

export function applyEscapeHatches(backend: Backend) {
  backend.ccfilappCreateAuthChallenge.resources.cfnResources.cfnFunction.functionName = `ccfilappCreateAuthChallenge-${branchName}`;
}
