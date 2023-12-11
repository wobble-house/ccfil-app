'use client';
export function ReferralsCard({
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
        
        <tr id={id} className="grid grid-flow-row grid-cols-19 gap-2 odd:bg-gray-100 even:bg-gray-300 items-center border-b overflow-auto align-middle content-center">
            <td className="flex justify-center items-center px-2 h-full align-middle">
            <input id="default-radio-1" type="radio" value={id} name="default-radio" className="justify-self-center w-4 border-r h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </td>
            <td className="flex items-center border-l text-xs px-2 h-full border-gray-400">{date}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-2 border-gray-400">{source}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-2 border-gray-400">{name} </td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-2 border-gray-400">{followUp}</td>
            <td className="flex justify-center border-l px-2 h-full items-center border-gray-400">
            <input disabled checked={DOA} id="default-checkbox" type="checkbox" value={``} className="align-middle justify-self-center border-l w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </td>
            <td className="flex items-center border-l text-xs px-2 h-full border-gray-400">{DOADate}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-3 border-gray-400">{reasonForDecline}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-3 border-gray-400">{howDidYouHearAboutUs}</td>
            <td className="flex items-center border-l text-sm px-2 h-full col-span-3 border-gray-400">{assistanceProvided}</td>
        </tr>
    )
}

