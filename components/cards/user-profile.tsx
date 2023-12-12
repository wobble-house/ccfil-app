import { cookies } from 'next/headers';
import { getCurrentUser } from '@aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/utils/server-utils';
import { ListTeamMembersQueryVariables } from '@/utils/graphql/API';
import { getTeamData } from '@/utils/getData/get-data';
import { Amplify, type ResourcesConfig } from 'aws-amplify';

const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
  }
};

Amplify.configure({
  Auth: authConfig
},{ssr: true});
// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function AuthGetCurrentUserServer() {
    
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec)
    });
    const variables: ListTeamMembersQueryVariables = {
        filter: {
            userId: {
                eq: currentUser.userId
            }
          }
        };
    const memberData = await getTeamData(variables);
    return (
      <AuthFetchResult
        description="The API is called on the server side."
        data={currentUser}
        memberData={memberData}
      />
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}

async function AuthFetchResult({ description, data, memberData }) {
console.log(memberData)
  return (
    <div className="flex justify-center relative max-w-screen mx-auto py-4">
        <div className='relative bg-white bg-opacity-75 rounded-md'>
      <h1 className="text-center text-3xl font-bold">Auth - getCurrentUser</h1>
      <p className="text-center">{description}</p>
      <div className="text-center">
        <pre>{JSON.stringify(data, null, 2)}</pre>
        
        {memberData.data.listTeamMembers.items.map(data => (
            <>
         <pre>{data.firstName}</pre>
         <pre>{data.lastName}</pre>
         <pre>{data.title}</pre>
         <pre>{data.bio}</pre>
        <pre>{data.link}</pre>
        </>
                ))}
      </div>
      </div>
    </div>
  );
}
