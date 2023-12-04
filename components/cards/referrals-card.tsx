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
        <ul id={id} className="grid grid-cols-10 items-center border-b overflow-auto align-middle content-center">
            <div className="flex justify-center items-center px-2 border-l h-full py-2 align-middle">
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="justify-self-center w-4 border-r h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
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