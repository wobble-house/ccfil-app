'use client';
import { useState } from "react";
import { deleteReferrals, updateReferrals } from "@/utils/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useRouter } from "next/navigation";
import NotesCard from "./notes-card";
import Image from 'next/image';

const client = generateClient();

export default function ReferralsCard({
    id,
    author,
    currentResident,
    date, 
    source, 
    name, 
    DOADate, 
    reasonForDecline,
    howDidYouHearAboutUs, 
    assistanceProvided,
    listType,
    notes}:{
        id: string,
        author: string,
        currentResident?: boolean,
        date: string, 
        source: string, 
        name: string, 
        DOADate: string, 
        reasonForDecline: string,
        howDidYouHearAboutUs: string, 
        assistanceProvided: string,
        listType?: any,
        notes?: any}){   

    const router = useRouter();
    const timestamp = new Date()
    const month = ((timestamp.getMonth()+1) <= 10 ? "0"+(timestamp.getMonth()+1) : timestamp.getMonth()+1).toString()
    const day = (timestamp.getDate() <= 10 ? "0"+timestamp.getDate() : timestamp.getDate()).toString()
    const today = (timestamp.getFullYear()+"-"+month+"-"+day).toString();
    const [todaysDate, setTodaysDate] = useState(today);


    function admitReferral(e){  
      function confirmAdmit(){
        const admitPrompt = prompt('Enter assistance provided')
        if (confirm("Do you really want to approve?")){
        setTodaysDate(today);
        const queryData = async () => {
            try {
            await client.graphql({
                query: updateReferrals.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: id,
                    currentResident: true,
                    DOADate: todaysDate,
                    assistanceProvided: admitPrompt
                  },
                },
              });
            } catch (error) {
                console.log('error', error);
            };
          }
          return queryData()
        }
        else {  
          console.log('cancelled')
    }
    <input type="text" placeholder="Assistance Provided" />
  }
  confirmAdmit().then(()=>router.refresh());
  }

    function declineReferral(e){
      function confirmDecline(){
        const declinePrompt = prompt('Enter a reason for Decline')
        if (confirm("Do you really want to decline?")){
          setTodaysDate(today);
          const queryData = async () => {
            try {
            await client.graphql({
                query: updateReferrals.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: id,
                    currentResident: false,
                    DOADate: todaysDate,
                    reasonForDecline: declinePrompt
                  },
                },
              });
            } catch (error) {
                console.log('error', error);
            }; 
          }
          return queryData()
        }
        else {  
            console.log('cancelled')
      }
      <input type="text" placeholder="Reason for Decline" />
    }
    confirmDecline().then(()=>router.refresh());
    }

    const deleteReferral = (e) => {
        function confirmDelete(){
        if (confirm("Do you really want to delete?")) {
            const queryData = async () => {
                try {
                await client.graphql({
                    query: deleteReferrals.replaceAll("__typename", ""),
                    variables: {
                      input: {
                        id: id,
                      },
                    },
                  });
                
                } catch (error) {
                    console.log('error', error);
                };     
            } 
            return queryData()
        }
        else {  
            console.log('cancelled')
          }
        }
        confirmDelete().then(()=>router.refresh());
    };
    if (listType == 'report') return (
      <tr id={id} className={`flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center justify-between`}>
            <td className="flex justify-center border-l text-xs h-full border-gray-400 w-10 items-center">
          <NotesCard id={id} notes={notes} name={name} author={author}/>
      </td>
      <td className="flex items-center border-l text-xs h-full border-gray-400 w-24 px-2">{date}</td>
      <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-32">{source}</td>
      <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-40">{name} </td>
      <td className="flex items-center border-l text-xs px-2 h-full border-gray-400 w-28">{DOADate}</td>
      <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-60">{reasonForDecline}</td>
      <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-64">{howDidYouHearAboutUs}</td>
      <td className="flex items-center border-l text-sm px-2 h-full border-gray-400 w-60">{assistanceProvided}</td>

  </tr>
    );
    else return(
        <tr id={id} className={`grid ${listType == 'approved' ? 'grid-cols-12': ''} ${listType == 'declined' ? 'grid-cols-17': ''} ${listType == 'referral' ? 'grid-cols-11': ''} ${listType == 'report' ? 'grid-cols-6': ''}  w-full odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center justify-between`}>
            <td className="admit flex justify-center border-l text-xs h-full border-gray-400 items-center">
                <button className="flex h-full align-middle text-white text-xs p-1 rounded-md hover:scale-105" onClick={admitReferral}><Image src={`/Icons/Icons/thumbsup.png`} alt={`thumbsup`} width={25} height={25}/></button>
            </td>
            <td className="decline flex justify-center border-l text-xs h-full border-gray-400 items-center">
                <button className="flex h-full align-middle text-white text-xs p-1 rounded-md hover:scale-105" onClick={declineReferral}><Image src={`/Icons/Icons/thumbsdown.png`} alt={`thumbsdown`} width={25} height={25}/></button>
            </td>
            <td className="notes flex justify-center border-l text-xs h-full border-gray-400 items-center">
                <NotesCard id={id} notes={notes} name={name} author={author}/>
            </td>
            <td className="date flex items-center border-l text-xs h-full border-gray-400 px-2">{date}</td>
            <td className="source flex items-center border-l text-sm px-2 h-full border-gray-400 col-span-2">{source}</td>
            <td className="name flex items-center border-l text-sm px-2 h-full border-gray-400 col-span-2">{name} </td>
            {listType != 'referral' ? <>
            <td className="doa flex items-center border-l text-xs px-2 h-full border-gray-400">{DOADate}</td>
            </>:null}
            {listType === 'declined' ? 
            <td className="reasonForDecline flex items-center border-l text-sm px-2 h-full border-gray-400 col-span-3">{reasonForDecline}</td>
            :null}
            {listType === 'referral' || 'approved' ? 
            <td className="how flex items-center border-l text-sm px-2 h-full border-gray-400 col-span-2">{howDidYouHearAboutUs}</td>
            :null}
            {listType === 'declined' ? 
            <td className="assistanceProvided flex items-center border-l text-sm px-2 h-full border-gray-400 col-span-2">{assistanceProvided}</td>
            :null}
            <td className="delete flex justify-center border-l text-xs h-full border-gray-400 items-center">
                <button className="flex h-full align-middle bg-red-700 text-white text-xs p-1 rounded-md hover:scale-105" onClick={deleteReferral}>x</button>
            </td>
        </tr>
    );

};

