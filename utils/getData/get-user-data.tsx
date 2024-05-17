'use client';
import { generateClient } from "aws-amplify/api";
import { getUser } from "@/utils/graphql/queries";
const client = generateClient({ authMode: 'apiKey' });

export async function getUserData(id){
    const existingUser = await client.graphql({
        query: getUser,
        variables: {
            id: id
        }
    }).then((data) => data);
    return existingUser.data;
}