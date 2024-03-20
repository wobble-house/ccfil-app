'use client';
import { useState } from "react";
import { deleteReferrals, updateReferrals } from "@/utils/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useRouter } from "next/navigation";
import NotesCard from "./notes-card";

const client = generateClient();

export default function FeatueFeedbackCard({
    id,
    date, 
    layoutDesign,
    functionality,
    formFields,
    featureRequest,
    other,
    isComplete,}:{
        id: string,
        date: string, 
        layoutDesign: string,
        functionality: string,
        formFields: string,
        featureRequest: string,
        other: string,
        isComplete: boolean}){   

    const router = useRouter();
    const timestamp = new Date()
    const month = ((timestamp.getMonth()+1) <= 10 ? "0"+(timestamp.getMonth()+1) : timestamp.getMonth()+1).toString()
    const day = (timestamp.getDate() <= 10 ? "0"+timestamp.getDate() : timestamp.getDate()).toString()
    const today = (timestamp.getFullYear()+"-"+month+"-"+day).toString();
    const [todaysDate, setTodaysDate] = useState(today);

    if (isComplete == false || null) return(
        <tr id={id} className={`flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center justify-between`}>
            <td className="flex items-center border-l text-xs h-full border-gray-400 w-28 px-2">{date}</td>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-48">{layoutDesign}</td>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-48">{functionality} </td>
            <td className="flex items-center border-l text-xs px-2 h-full border-gray-400 w-28">{formFields}</td>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-64">{featureRequest}</td>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-64">{other}</td>
        </tr>
    )
    else return(
        null
    )
};

