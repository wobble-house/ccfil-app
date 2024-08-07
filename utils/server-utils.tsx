import { cookies } from "next/headers";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import config from '../app/amplifyconfiguration.json';
import { Amplify, type ResourcesConfig } from 'aws-amplify';
const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID
  }
};
Amplify.configure({ Auth: authConfig },{ssr: true});

export const serverClient = generateServerClientUsingCookies({
  config,
  cookies,
}); 

export const { runWithAmplifyServerContext } = createServerRunner({
    config,
  });