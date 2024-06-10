import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import ReferralsList from "@/components/lists/referrals-list"
import { getReferrals } from '@/utils/getData/get-data'
import { ListReferralsQueryVariables } from "@/utils/graphql/API"
import { getCurrentUserFromServer } from "@/utils/getData/get-data";
import { GetUserQueryVariables } from "@/utils/graphql/API";
import { cookies } from 'next/headers';
import { getCurrentUser} from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from "@/utils/server-utils"
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

const newVariables: ListReferralsQueryVariables = {
  filter: {
    DOADate: {
      eq: null
    },
  }
};

const approvedVariables: ListReferralsQueryVariables = {
  filter: {
    currentResident: {
      eq: true
    }
  }
};

const deniedVariables: ListReferralsQueryVariables = {
  filter: {
    reasonForDecline: {
      ne: null
    },
    currentResident: {
      eq: false
    },
  }
};



export default async function Referrals() {
  const newReferralsData = await getReferrals(newVariables)
  const approvedReferralsData = await getReferrals(approvedVariables)
  const declinedReferralsData = await getReferrals(deniedVariables)

  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });

  const userVariables: GetUserQueryVariables = {
  id: currentUser.userId
  };

  const author = await getCurrentUserFromServer(userVariables)
  return (
     <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInForm/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Referrals</h2>
      
      <div className="relative flex flex-col justify-center items-center rounded-lg pb-20">
        <ReferralsList author={author.data.getUser.email} data={newReferralsData.data.listReferrals.items} title={'Referrals'} listType={'referral'}/>
        {approvedReferralsData.data.listReferrals.items.length > 0 ? <ReferralsList author={author.data.getUser.email} data={approvedReferralsData.data.listReferrals.items} title={'Approved'} listType={'approved'}/>:null}
        {declinedReferralsData.data.listReferrals.items.length > 0 ? <ReferralsList author={author.data.getUser.email} data={declinedReferralsData.data.listReferrals.items} title={'Declined'} listType={'declined'}/>:null}
        </div>
        
   </div>
  )
}