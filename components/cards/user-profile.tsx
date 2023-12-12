import { cookies } from 'next/headers';
import { getCurrentUser } from '@aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/utils/server-utils';

// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec)
    });

    return (
      <AuthFetchResult
        description="The API is called on the server side."
        data={currentUser}
      />
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}

function AuthFetchResult({ description, data }) {
  return (
    <div className="max-w-screen">
      <h1 className="text-center text-3xl font-bold">Auth - getCurrentUser</h1>
      <p className="text-center">{description}</p>
      <div className="text-center">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}