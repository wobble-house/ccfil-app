'use client';
import ReferralsCard from "./referrals-card";
import TeamCard from "./team-card";

export function InfoCardList({data}){

  return(
          <ul className="relative flex flex-col md:grid md:grid-cols-2 gap-8 mx-auto text-center place-content-center z-60"
            >
                {data.map(data => (
                              <TeamCard 
                              id={`${data.id} card`}
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

export function ReferralsList({data}){
  return(
    <div className='relative'>
      <h2 className="text-4xl uppercase text-center mx-auto">Referrals List</h2>
    <div className="border-2 border-solid rounded-lg overflow-hidden">
    <ul className={`relative grid grid-cols-10 w-full pr-8 bg-blue2 text-white items-center overscroll-x-auto overflow-auto`}>
      <input id="default-radio-1" type="radio" value="" name="default-radio" className="justify-self-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      <li className="border-l px-2 text-center font-bold">Date</li>
      <li className="border-l px-2 text-center font-bold">Source</li>
      <li className="border-l px-2 text-center font-bold">Name </li>
      <li className="border-l px-2 text-center font-bold">Follow Up</li>
      <li className="border-l px-2 text-center font-bold">DOA</li>
      <li className="border-l px-2 text-center font-bold">DOA Date</li>
      <li className="border-l px-2 text-center font-bold">Reason For Decline</li>
      <li className="border-l px-2 text-center font-bold">how Did You Hear About Us</li>
      <li className="border-l px-2 text-center font-bold">Assistance Provided</li>
    </ul>
    <ul className={`relative flex flex-col w-full pr-8 bg-gray1 bg-opacity-75 items-center`}>{data.map(data => ( 
      <ReferralsCard
        key={data.id}
        id={data.id}
        date={data.date}
        source={data.source}
        name={data.name}
        followUp={data.followUp}
        DOA={data.DOA}
        DOADate={data.DOADate}
        reasonForDecline={data.reasonForDecline}
        howDidYouHearAboutUs={data.howDidYouHearAboutUs}
        assistanceProvided={data.assistanceProvided}
        />
        ))}
      </ul>
      </div>
      </div>
  )
}