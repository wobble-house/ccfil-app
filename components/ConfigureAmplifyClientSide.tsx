'use client';

import { Amplify } from 'aws-amplify';
import config from '../app/aws-exports';

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}