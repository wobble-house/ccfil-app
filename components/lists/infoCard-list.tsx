'use client';
import Button from "../buttons/button";
import ReferralsCard from "../cards/referrals-card";
import TeamCard from "../cards/team-card";

export default function InfoCardList({data}){
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
