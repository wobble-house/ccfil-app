'use client';
import { set } from "date-fns";
import { useState } from "react";
import { updateReferrals } from "@/utils/graphql/mutations";
export default function ReferralsCard({
    id,
    date, 
    source, 
    name, 
    followUp, 
    DOA, 
    DOADate, 
    reasonForDecline,
    howDidYouHearAboutUs, 
    assistanceProvided}:{
        id,
        date: string, 
        source: string, 
        name: string, 
        followUp: string, 
        DOA: boolean, 
        DOADate: string, 
        reasonForDecline: string,
        howDidYouHearAboutUs: string, 
        assistanceProvided: string}){
    return(
        <ul id={id} className="grid grid-cols-10 odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center">
            <div className="flex justify-center items-center px-2 border-l h-full py-2 align-middle">
            <input id="default-radio-1" type="radio" value={id} name="default-radio" className="justify-self-center w-4 border-r h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{date}</li>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{source}</li>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{name} </li>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{followUp}</li>
            <div className="flex justify-center px-2 border-l h-full py-2 items-center">
            <input disabled checked={DOA} id="default-checkbox" type="checkbox" value={``} className="align-middle justify-self-center border-l px-2 w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{DOADate}</li>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{reasonForDecline}</li>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{howDidYouHearAboutUs}</li>
            <li className="flex items-center border-l px-2 text-sm h-full py-2">{assistanceProvided}</li>
        </ul>
    )
}

export function NewReferralsCard({
    id,
    date, 
    source, 
    name, 
    followUp, 
    DOADate, 
    reasonForDecline,
    howDidYouHearAboutUs, 
    assistanceProvided,
    listType}:{
        id,
        date: string, 
        source: string, 
        name: string, 
        followUp: string, 
        DOADate: string, 
        reasonForDecline: string,
        howDidYouHearAboutUs: string, 
        assistanceProvided: string,
        listType?: any}){
    const [admit, setAdmit] = useState(false);

    const admitReferral = (e) => {
        setAdmit(true);
    }
    const declineReferral = (e) => {
        setAdmit(false);
    }
    const editReferral = (e) => {
    }

    return(
        <tr id={id} className={`grid grid-flow-row ${listType === 'referral' ? "grid-cols-21":"grid-cols-18"} gap-2 odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center`}>
            <td className="flex justify-center items-center px-2 h-full align-middle">
                <input id="default-radio-1" type="radio" value={id} name="default-radio" className="justify-self-center w-4 border-r h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </td>
            <td className="flex items-center border-l text-xs px-2 h-full border-gray-400">{date}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-2 border-gray-400">{source}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-2 border-gray-400">{name} </td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-2 border-gray-400">{followUp}</td>
            {listType === 'approved' ? 
            <td className="flex items-center border-l text-xs px-2 h-full border-gray-400">{DOADate}</td>
            :<></>}
            <td className="flex items-center border-l text-sm px-2 h-full col-span-3 border-gray-400">{reasonForDecline}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-3 border-gray-400">{howDidYouHearAboutUs}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-3 border-gray-400">{assistanceProvided}</td>
            
            {listType === 'referral' ? <><td className="flex items-center border-l text-xs h-full border-gray-400 px-1">
                <button className="flex justify-center items-center px-2 h-full align-middle bg-green-700 rounded-xl text-white text-xs" onClick={admitReferral}>Admit</button>
            </td>
            <td className="flex items-center border-l text-xs h-full border-gray-400 px-1">
                <button className="flex justify-center items-center px-2 h-full align-middle bg-red-700 rounded-xl text-white text-xs" onClick={declineReferral}>Decline</button>
            </td>
            <td className="flex items-center border-l text-xs h-full border-gray-400 px-1">
                <button className="flex justify-center items-center px-2 h-full align-middle bg-gray-400 rounded-xl text-white text-xs" onClick={editReferral}>Edit</button>
            </td>
            </>:<></>
            }

        </tr>
    )
};

