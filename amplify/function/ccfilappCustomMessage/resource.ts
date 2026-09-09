import { defineFunction } from '@aws-amplify/backend';
import type { Backend } from '../../backend';
import { branchName } from '../../branch-name';

export const ccfilappCustomMessage = defineFunction({
  entry: './index.js',
  name: `ccfilappCustomMessage-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    EMAILSUBJECT: 'confirmation',
    MODULES: 'verification-link',
    REDIRECTURL: '/',
    RESOURCENAME: 'ccfilappCustomMessage',
    ENV: `${branchName}`,
    EMAILMESSAGE: 'click here',
    REGION: 'us-east-1',
  },
  runtime: 18,
});

export function applyEscapeHatches(backend: Backend) {
  backend.ccfilappCustomMessage.resources.cfnResources.cfnFunction.functionName = `ccfilappCustomMessage-${branchName}`;
}
