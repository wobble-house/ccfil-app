import { cookies } from "next/headers";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { defaultStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import config from "../app/amplifyconfiguration.json"
import { Amplify, type ResourcesConfig } from 'aws-amplify';
const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
  }
};
cognitoUserPoolsTokenProvider.setAuthConfig(authConfig);
cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);
Amplify.configure({ Auth: authConfig });

export const serverClient = generateServerClientUsingCookies({
  config,
  cookies,
}); 

export const { runWithAmplifyServerContext } = createServerRunner({
    config,
  });