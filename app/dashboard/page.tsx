import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import ReferralsList from "@/components/lists/referrals-list"
import { getReferrals } from '@/utils/getData/get-data'
import { ListReferralsQueryVariables } from "@/utils/graphql/API"
import CSVButton from "@/components/buttons/csv-button"
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

const allVariables: ListReferralsQueryVariables = {
  filter: {
    id: {
      ne: null
    }
  }
};

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
  const allReferralsData = await getReferrals(allVariables)
  const newReferralsData = await getReferrals(newVariables)
  const approvedReferralsData = await getReferrals(approvedVariables)
  const declinedReferralsData = await getReferrals(deniedVariables)
  return (
     <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInForm/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Dashboard</h2>
      
      <div className="relative flex flex-col justify-center items-center rounded-lg pb-20">
      {allReferralsData.data.listReferrals.items.length > 0 ? 
        <CSVButton data={allReferralsData.data.listReferrals.items}/>:null}
        <ReferralsList data={newReferralsData.data.listReferrals.items} title={'Referrals'} listType={'referral'}/>
        {approvedReferralsData.data.listReferrals.items.length > 0 ? <ReferralsList data={approvedReferralsData.data.listReferrals.items} title={'Approved'} listType={'approved'}/>:null}
        {declinedReferralsData.data.listReferrals.items.length > 0 ? <ReferralsList data={declinedReferralsData.data.listReferrals.items} title={'Declined'} listType={'declined'}/>:null}
        </div>
   </div>
  )
}