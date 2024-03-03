'use client';
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
const client = generateClient();
export async function createUsers(variables){
    try{
        await client.graphql({
            query: createUser,
            variables: {
                input: variables
            }
        });
    }catch(error){
        console.log(error);
    }
}