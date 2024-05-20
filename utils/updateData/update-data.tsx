'use client';
import { generateClient } from "aws-amplify/api";
import { updateReferrals, updateUser } from "../graphql/mutations";
import { type UpdateReferralsInput, UpdateUserInput } from "../graphql/API";
const client = generateClient();
export async function updateReferral({variables}:{variables: UpdateReferralsInput}){
    try{
        await client.graphql({
            query: updateReferrals,
            variables: {
                input: variables
            }
        });
        console.log(updateReferral);
    }catch(error){
        console.log(error);
    }
}

export async function updateUserData({variables}:{variables: UpdateUserInput}){
    try{
        await client.graphql({
            query: updateUser,
            variables: {
                input: variables
            }
        });
        console.log(updateUserData);
    }catch(error){
        console.log(error);
    }
}