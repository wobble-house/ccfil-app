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
  if (authenticated && request.nextUrl.pathname === '/signin' || request.nextUrl.pathname === '/signup') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  else if (authenticated && (request.nextUrl.pathname === '/dashboard' || request.nextUrl.pathname === '/profile')) {
    return NextResponse.next();
  }
  
  else if (authenticated) {
    return NextResponse.next();
  }

  else if (!authenticated && (request.nextUrl.pathname === '/signin' || request.nextUrl.pathname === '/signup')) {
    return NextResponse.next();
  }
  else return NextResponse.redirect(new URL('/signin', request.url));
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/forms/:path*',
    '/signin/:path*',
    '/signup/:path*'
  ]
};