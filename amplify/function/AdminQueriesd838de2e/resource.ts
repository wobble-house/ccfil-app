import { defineFunction } from '@aws-amplify/backend';
import type { Backend } from '../../backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const AdminQueriesd838de2e = defineFunction({
  entry: './index.js',
  name: `AdminQueriesd838de2e-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    GROUP: 'admin',
    USERPOOL: 'us-east-1_KtP69IKaA',
    ENV: `${branchName}`,
  },
  runtime: 18,
});

export function applyEscapeHatches(backend: Backend) {
  backend.AdminQueriesd838de2e.resources.cfnResources.cfnFunction.functionName = `AdminQueriesd838de2e-${branchName}`;
}
