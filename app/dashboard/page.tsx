import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInButton from "@/components/forms/signin"
import { ReferralsList } from "@/components/cards/list"
import { getReferrals } from '@/utils/getData/get-data'
import { ListReferralsQueryVariables } from "@/utils/graphql/API"
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
    DOADate: {
      ne: null
    },
    currentResident: {
      eq: false
    },
  }
};

export default async function Dashboard() {
  const newReferralsData = await getReferrals(newVariables)
  const approvedReferralsData = await getReferrals(approvedVariables)
  const declinedReferralsData = await getReferrals(deniedVariables)
  return (
     <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInButton/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4">Dashboard</h2>
      <div className="relative flex flex-col gap-20 justify-center items-center rounded-lg pb-20">
        <ReferralsList data={newReferralsData.data.listReferrals.items} title={'Referrals'} listType={'referral'}/>
        {approvedReferralsData.data.listReferrals.items.length > 0 ? <ReferralsList data={approvedReferralsData.data.listReferrals.items} title={'Approved'} listType={'approved'}/>:null}
        {declinedReferralsData.data.listReferrals.items.length > 0 ? <ReferralsList data={declinedReferralsData.data.listReferrals.items} title={'Declined'} listType={'declined'}/>:null}
        </div>
   </div>
  )
}