'use client';
import { useState } from "react";
import { updateReferrals } from "@/utils/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useRouter } from "next/navigation";
import NotesCard from "./notes-card";

const client = generateClient();

export default function ReferralsCard({
    id,
    currentResident,
    date, 
    source, 
    name, 
    followUp, 
    DOADate, 
    reasonForDecline,
    howDidYouHearAboutUs, 
    assistanceProvided,
    listType,
    notes}:{
        id: string,
        currentResident?: boolean,
        date: string, 
        source: string, 
        name: string, 
        followUp: string, 
        DOADate: string, 
        reasonForDecline: string,
        howDidYouHearAboutUs: string, 
        assistanceProvided: string,
        listType?: any,
        notes?: any}){   

    const router = useRouter();
    const timestamp = new Date()
    const month = ((timestamp.getMonth()+1) <= 10 ? "0"+(timestamp.getMonth()+1) : timestamp.getMonth()+1).toString()
    const today = (timestamp.getFullYear()+"-"+month+"-"+timestamp.getDate()).toString();
    const [todaysDate, setTodaysDate] = useState(today);
    const [admit, setAdmit] = useState(currentResident);

    function admitReferral(e){  
        setAdmit(true);
        setTodaysDate(today);
        const queryData = async () => {
            try {
            await client.graphql({
                query: updateReferrals.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: id,
                    currentResident: true,
                    DOADate: todaysDate
                  },
                },
              });
            } catch (error) {
                console.log('error', error);
        };       
    }
    return queryData().then(()=>router.refresh())  
    };

    function declineReferral(e){
        setAdmit(false);
        setTodaysDate(today);
        const queryData = async () => {
            try {
            await client.graphql({
                query: updateReferrals.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: id,
                    currentResident: false,
                    DOADate: todaysDate
                  },
                },
              });
            } catch (error) {
                console.log('error', error);
        }; 
    }
    return queryData().then(()=>router.refresh())
        };

    const editReferral = (e) => {
    }

    return(
        <tr id={id} className={`flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center`}>
            <td className="flex justify-center border-l text-xs h-full border-gray-400 w-16 ">
                <button className="flex h-full align-middle bg-green-700 text-white text-xs p-1 rounded-md" onClick={admitReferral}>Admit</button>
            </td>
            <td className="flex justify-center border-l text-xs h-full border-gray-400 w-16">
                <button className="flex h-full align-middle bg-red-700 text-white text-xs p-1 rounded-md" onClick={declineReferral}>Decline</button>
            </td>
            <td className="flex justify-center border-l text-xs h-full border-gray-400 w-16">
                <NotesCard id={id} notes={notes} name={name}/>
            </td>
            <td className="flex items-center border-l text-xs h-full border-gray-400 w-28 px-2">{date}</td>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-48">{source}</td>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-48">{name} </td>
            {listType === 'approved' ? <>
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-48">{followUp}</td>
            <td className="flex items-center border-l text-xs px-2 h-full border-gray-400 w-28">{DOADate}</td>
            </>:null}
            {listType === 'declined' ? 
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-64">{reasonForDecline}</td>
            :null}
            {listType === 'referral' ? 
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-64">{howDidYouHearAboutUs}</td>
            :null}
            {listType === 'approved' ? 
            <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-64">{assistanceProvided}</td>
            :null}


        </tr>
    )
};

