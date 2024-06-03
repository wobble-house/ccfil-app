import Button from "../buttons/button";
import ReferralsCard from "../cards/referrals-card";
import { getCurrentUserFromServer } from "@/utils/getData/get-data";
import { GetUserQueryVariables } from "@/utils/graphql/API";

export default async function ReferralsList({userId, data, title, listType}:{userId, data, title, listType?}){
  const userVariables: GetUserQueryVariables = {
    id: userId
};

const user = await getCurrentUserFromServer(userVariables)
  if (listType != 'report') return(
    <div className='flex flex-col bg-white bg-opacity-75 mx-4 border-grey-100 pt-2 rounded-lg max-w-6xl w-full my-10'>
      <h2 className="text-4xl uppercase text-center mx-auto pb-2 ">{title}</h2>
      {listType === 'referral' ? 
      <div className="absolute ml-2">
          <Button text={'Add Referral'} link={'/forms/referrals'}/>
        </div>:<></>
      } 
        <table className="relative inline border-2 border-solid rounded-lg w-full">
          <tbody className="w-full flex flex-col mx-auto">
            <tr className={`relative grid grid-flow-row ${listType == 'approved' ? 'grid-cols-13': ''} ${listType == 'declined' ? 'grid-cols-18': ''} ${listType == 'referral' ? 'grid-cols-12': ''} ${listType == 'report' ? 'grid-cols-6': ''} bg-blue2 text-white items-center justify-between`}>
              <th className="admit justify-center items-center h-full border-blue1 border-l text-center font-bold text-xs ">Admit</th>
              <th className="decline justify-center items-center h-full border-blue1 border-l text-center font-bold text-xs ">Decline</th>
              <th className="notes flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-xs ">Notes</th>
              <th className="date flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs ">Date</th>
              <th className="source flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs col-span-2">Source</th>
              <th className="name flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs col-span-2">Name </th>
              {listType === 'approved' ? <>
              <th className="doa flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs">DOA</th>
               </> :null}
               {listType === 'declined' ? <>
              <th className="dod flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs">DOD</th>
               </> :null}
                {listType === 'declined' ?
              <th className="reasonForDecline flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs col-span-3">Reason For Decline</th>
              :null}
              {listType === 'referral' || 'approved' ?
              <th className="how flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs col-span-2">how Did You Hear About Us</th>
              :null}
              {listType === 'declined' ?
              <th className="assistanceProvided flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs col-span-2">Assistance Provided</th>
              :null}
              {listType !== 'report' ?
              <th className="edit flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs">edit</th>
              :null}
              <th className="delete flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-xs">Delete</th>
            </tr>
            {data.length < 1 ? <tr className={`relative flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 justify-center h-20 items-center border-b overflow-auto align-middle content-center`}><td className={`flex flex-row align-middle items-center gap-4 `}><h2 className={`relative text-center w-full text-nowrap`}>No Referrals!</h2><Button text={'Add Referral'} link={'/forms/referrals'}/></td></tr> : null}
      {data.map(data => ( 
      <ReferralsCard
        key={data.id}
        id={data.id}
        author={user.data.getUser.email}
        date={data.date}
        source={data.source}
        name={data.name}
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
  );
  else return (
    <div className='flex flex-col bg-white bg-opacity-75 mx-4 border-grey-100 pt-2 rounded-lg max-w-6xl w-full my-10'>
      <h2 className="text-4xl uppercase text-center mx-auto pb-2 ">{title}</h2>
        <table className="relative inline border-2 border-solid rounded-lg w-full">
          <tbody className="w-full flex flex-col flex-grow mx-auto">
            <tr className={`relative flex flex-row w-full bg-blue2 text-white items-center justify-between`}>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-24">Date</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-24">Approved</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-32">Source</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-40">Name </th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-28">DOA/DOD</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-28">Turnover</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-60">Reason For Decline</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-64">how Did You Hear About Us</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-60">Assistance Provided</th>
            </tr>
            {data.length < 1 ? <tr className={`relative flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 justify-center h-20 items-center border-b overflow-auto align-middle content-center`}><td className={`flex flex-row align-middle items-center gap-4 `}><h2 className={`relative text-center w-full text-nowrap`}>No Referrals!</h2><Button text={'Add Referral'} link={'/forms/referrals'}/></td></tr> : null}
      {data.map(data => ( 
      <ReferralsCard
        key={data.id}
        id={data.id}
        author={user.data.getUser.email}
        currentResident={data.currentResident}
        date={data.date}
        source={data.source}
        name={data.name}
        DOADate={data.DOADate}
        reasonForDecline={data.reasonForDecline}
        howDidYouHearAboutUs={data.howDidYouHearAboutUs}
        assistanceProvided={data.assistanceProvided}
        listType={listType}
        notes={data.notes}
        turnover={data.turnover}
        />
        ))}
        </tbody>
      </table>
      </div>
  )
}