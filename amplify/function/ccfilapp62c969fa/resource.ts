import { defineFunction } from '@aws-amplify/backend';
import type { Backend } from '../../backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const ccfilapp62c969fa = defineFunction({
  entry: './index.js',
  name: `ccfilapp62c969fa-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: { ENV: `${branchName}`, REGION: 'us-east-1' },
  runtime: 18,
});

export function applyEscapeHatches(backend: Backend) {
  backend.ccfilapp62c969fa.resources.cfnResources.cfnFunction.functionName = `ccfilapp62c969fa-${branchName}`;
}
