import { defineAuth } from '@aws-amplify/backend';
import { ccfilappCreateAuthChallenge } from '../function/ccfilappCreateAuthChallenge/resource';
import { ccfilappCustomMessage } from '../function/ccfilappCustomMessage/resource';
import { ccfilappDefineAuthChallenge } from '../function/ccfilappDefineAuthChallenge/resource';
import { ccfilappVerifyAuthChallengeResponse } from '../function/ccfilappVerifyAuthChallengeResponse/resource';
import { CfnResource, Duration } from 'aws-cdk-lib';
import type { Backend } from '../backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Your CCFIL verification code',
      verificationEmailBody: () => 'Your CCFIL verification code is {####}',
    },
  },
  userAttributes: {
    email: {
      required: true,
      mutable: true,
    },
  },
  groups: ['admin', 'staff', 'contractor'],
  triggers: {
    createAuthChallenge: ccfilappCreateAuthChallenge,
    customMessage: ccfilappCustomMessage,
    defineAuthChallenge: ccfilappDefineAuthChallenge,
    verifyAuthChallengeResponse: ccfilappVerifyAuthChallengeResponse,
  },
  multifactor: {
    mode: 'OPTIONAL',
    totp: true,
    sms: true,
  },
});

export function applyEscapeHatches(backend: Backend) {
  const cfnUserPool = backend.auth.resources.cfnResources.cfnUserPool;
  cfnUserPool.usernameAttributes = ['email'];
  cfnUserPool.policies = {
    passwordPolicy: {
      minimumLength: 8,
      requireLowercase: true,
      requireNumbers: true,
      requireSymbols: true,
      requireUppercase: true,
      temporaryPasswordValidityDays: 7,
    },
  };
  const userPool = backend.auth.resources.userPool;
  const nativeUserPoolClient = userPool.addClient('NativeAppClient', {
    refreshTokenValidity: Duration.days(30),
    enableTokenRevocation: true,
    enablePropagateAdditionalUserContextData: false,
    authSessionValidity: Duration.minutes(3),
    disableOAuth: true,
    generateSecret: false,
  });
  const cognitoProviders =
    backend.auth.resources.cfnResources.cfnIdentityPool
      .cognitoIdentityProviders;
  if (cognitoProviders && Array.isArray(cognitoProviders)) {
    cognitoProviders.push({
      clientId: nativeUserPoolClient.userPoolClientId,
      providerName: `cognito-idp.${backend.auth.stack.region}.amazonaws.com/${userPool.userPoolId}`,
    });
  }
  for (const cfnResource of backend.auth.stack.node
    .findAll()
    .filter(
      (c) =>
        CfnResource.isCfnResource(c) &&
        [
          'AWS::Cognito::UserPool',
          'AWS::Cognito::IdentityPool',
          'AWS::Cognito::UserPoolClient',
          'AWS::Cognito::IdentityPoolRoleAttachment',
          'AWS::Cognito::UserPoolGroup',
          'AWS::Cognito::UserPoolDomain',
          'AWS::Cognito::UserPoolIdentityProvider',
        ].includes(c.cfnResourceType)
    )) {
    (cfnResource as CfnResource).addOverride('UpdateReplacePolicy', 'Retain');
    (cfnResource as CfnResource).addOverride('DeletionPolicy', 'Retain');
  }
}
