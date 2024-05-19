import Button from "../buttons/button";
import ReferralsCard from "../cards/referrals-card";
import { getCurrentUserFromServer } from "@/utils/getData/get-data";
import { GetUserQueryVariables } from "@/utils/graphql/API";

export default async function ReferralsList({userId, data, title, listType}:{userId, data, title, listType?}){
  const userVariables: GetUserQueryVariables = {
    id: userId
};
const user = await getCurrentUserFromServer(userVariables)
  return(
    <div className='flex flex-col bg-white bg-opacity-75 mx-4 border-grey-100 pt-2 rounded-lg max-w-6xl w-full my-10'>
      <h2 className="text-4xl uppercase text-center mx-auto pb-2 ">{title}</h2>
      {listType === 'referral' ? 
      <div className="absolute ml-2">
          <Button text={'Add Referral'} link={'/forms/referrals'}/>
        </div>:<></>
      } 
        <table className="relative inline border-2 border-solid rounded-lg w-full">
          <tbody className="w-full flex flex-col flex-grow mx-auto">
            <tr className={`relative flex flex-row w-full bg-blue2 text-white items-center justify-between`}>
              <th className="flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-sm w-10">Admit</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-sm w-10">Decline</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l text-center font-bold text-sm w-10">Notes</th>
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
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-12">Delete</th>
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
  )
}