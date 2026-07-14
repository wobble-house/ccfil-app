'use server';

import { revalidatePath } from "next/cache";

//builder is more strict in next 15 and requires revalidate path to be run on serverside
export async function revalidateReferralsPath(originalPath: string, type?: "layout" | "page") 
{
    revalidatePath(originalPath, type)
}