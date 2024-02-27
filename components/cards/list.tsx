'use client';
import Button from "../buttons/button";
import {NewReferralsCard} from "./referrals-card";
import TeamCard from "./team-card";
import Link from "next/link";

export function InfoCardList({data}){
  return(
          <ul className="relative flex flex-col md:grid md:grid-cols-2 md: gap-4 lg:gap-8 mx-auto text-center place-content-center z-60"
            >
                {data.map(data => (
                              <TeamCard 
                              id={`${data.firstName+data.lastName} card`}
                              key={data.id}
                              bio={data.bio}
                              link={data.link != null ? data.link : null}
                              firstName={data.firstName}
                              lastName={data.lastName}
                              Image={data.Image}
                              title={data.title}
                            />
                ))}
          </ul>
  )
}

export function ReferralsList({data, title, listType}:{data, title, listType?}){
  return(
    <div className='overflow-x-auto flex flex-col bg-white bg-opacity-75 mx-4 border-grey-100 pt-2 rounded-lg'>
      <h2 className="text-4xl uppercase text-center mx-auto pb-2 ">{title}</h2>
      {listType === 'referral' ? 
      <div className="absolute ml-2">
          <Button text={'Add Referral'} link={'/forms/referrals'}/>
        </div>:<></>
      } 
        <table className="relative inline border-2 border-solid rounded-lg overscroll-x-auto">
          <tbody>
            <tr className={`relative grid ${listType === 'referral' ? "grid-cols-21":"grid-cols-18"} gap-2 w-full bg-blue2 text-white items-center overscroll-contain overflow-auto`}>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" className="justify-self-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              </th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm ">Date</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold col-span-2 text-sm">Source</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold col-span-2 text-sm">Name </th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold col-span-2 text-sm">Follow Up</th>
              {listType === 'approved' ?
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm">DOA Date</th>
                :<></>}
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold col-span-3 text-sm">Reason For Decline</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold col-span-3 text-sm">how Did You Hear About Us</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold col-span-3 text-sm">Assistance Provided</th>
              {listType === 'referral' ? <>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm">Admit</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm">Decline</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm">Edit</th>
              </>:<></>}
            </tr>
      {data.map(data => ( 
      <NewReferralsCard
        key={data.id}
        id={data.id}
        date={data.date}
        source={data.source}
        name={data.name}
        followUp={data.followUp}
        currentResident={data.currentResident}
        DOADate={data.DOADate}
        reasonForDecline={data.reasonForDecline}
        howDidYouHearAboutUs={data.howDidYouHearAboutUs}
        assistanceProvided={data.assistanceProvided}
        listType={listType}
        />
        ))}
        </tbody>
      </table>
      </div>
  )
}