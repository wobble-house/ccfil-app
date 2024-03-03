'use client';
import Button from "../buttons/button";
import ReferralsCard from "./referrals-card";
import TeamCard from "./team-card";

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
    <div className='flex flex-col bg-white bg-opacity-75 mx-4 border-grey-100 pt-2 rounded-lg max-w-6xl w-full'>
      <h2 className="text-4xl uppercase text-center mx-auto pb-2 ">{title}</h2>
      {listType === 'referral' ? 
      <div className="absolute ml-2">
          <Button text={'Add Referral'} link={'/forms/referrals'}/>
        </div>:<></>
      } 
        <table className="relative inline border-2 border-solid rounded-lg w-full">
          <tbody className="w-full flex flex-col flex-grow mx-auto">
            <tr className={`relative flex flex-row w-full bg-blue2 text-white items-center`}>
              <th className="flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-sm w-16">Admit</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-sm w-16">Decline</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-sm w-16">Notes</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-28">Date</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-48">Source</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-48">Name </th>
              {listType === 'approved' ? <>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-28">DOA</th>
               </> :null}
                {listType === 'declined' ?
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-64">Reason For Decline</th>
              :null}
              {listType === 'referral' ?
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-64">how Did You Hear About Us</th>
              :null}
              {listType === 'approved' ?
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-64">Assistance Provided</th>
              :null}
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-16">Delete</th>
            </tr>
      {data.map(data => ( 
      <ReferralsCard
        key={data.id}
        id={data.id}
        date={data.date}
        source={data.source}
        name={data.name}
        followUp={data.followUp}
        DOADate={data.DOADate}
        reasonForDecline={data.reasonForDecline}
        howDidYouHearAboutUs={data.howDidYouHearAboutUs}
        assistanceProvided={data.assistanceProvided}
        listType={listType}
        notes={data.notes}
        />
        ))}
        </tbody>
      </table>
      </div>
  )
}