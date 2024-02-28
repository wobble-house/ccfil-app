'use client';
import { generateClient } from "aws-amplify/api";
import { updateReferrals } from "../graphql/mutations";
import { type UpdateReferralsInput } from "../graphql/API";
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