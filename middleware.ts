'use client'
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/utils/server-utils';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {});
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });
  if (authenticated) {
    console.log(response)
    return response
  }
  return NextResponse.redirect(new URL('/signin', request.url));
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/forms/:path*'
  ]
};