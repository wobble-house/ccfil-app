import Button from "../buttons/button";
import FeatueFeedbackCard from "../cards/featureFeedback-card";
import ReferralsCard from "../cards/referrals-card";

export default function FeatureFeedbackList({data, title, listType}:{data, title, listType?}){
  return(
    <div className='flex flex-col bg-white bg-opacity-75 mx-4 border-grey-100 pt-2 rounded-lg max-w-6xl w-full my-10'>
      <h2 className="text-4xl uppercase text-center mx-auto pb-2 ">{title}</h2>
        <table className="relative inline border-2 border-solid rounded-lg w-full">
          <tbody className="w-full flex flex-col flex-grow mx-auto">
            <tr className={`relative flex flex-row w-full bg-blue2 text-white items-center justify-between`}>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-28">Date</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-48">Layout Design</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-48">Functionality</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-28">Form Fields</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-64">Feature Request</th>
              <th className="flex justify-center items-center h-full border-blue1 border-l px-2 text-center font-bold text-sm w-64">Other</th>
            </tr>
            {data.length < 1 ? <tr className={`relative flex flex-row w-full odd:bg-gray-100 even:bg-gray-300 justify-center h-20 items-center border-b overflow-auto align-middle content-center`}><td className={`flex flex-row align-middle items-center gap-4 `}><h2 className={`relative text-center w-full text-nowrap`}>No Feedback!</h2><Button text={'Add Feedback'} link={'/forms/feedback'}/></td></tr> : null}
      {data.map(data => ( 
      <FeatueFeedbackCard
        key={data.id}
        id={data.id}
        date={data.date}
        layoutDesign={data.layoutDesign}
        functionality={data.functionality}
        formFields={data.formFields}
        featureRequest={data.featureRequest}
        other={data.other}
        isComplete={false}
        />
        ))}
        </tbody>
      </table>
      </div>
  )
}