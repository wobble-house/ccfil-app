'use client';

import { Amplify } from 'aws-amplify';
import config from '../app/aws-exports';
import { CookieStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

Amplify.configure(config, { ssr: true });
cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());
export default function ConfigureAmplifyClientSide({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}