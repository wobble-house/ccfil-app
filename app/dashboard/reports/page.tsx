import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import { getReferrals } from "@/utils/getData/get-data"
import { ListReferralsQueryVariables } from "@/utils/graphql/API"
import ReferralsList from "@/components/lists/referrals-list"
import { runWithAmplifyServerContext } from "@/utils/server-utils"
import { cookies } from "next/headers"
import { getCurrentUser } from "aws-amplify/auth/server"
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

const allVariables: ListReferralsQueryVariables = {
  filter: {
    id: {
      ne: null
    }
  },
};

export default async function Reports() {
  const allReferralsData = await getReferrals(allVariables)
  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });
  return (
     <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInForm/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Reports</h2>
      <div className="relative flex flex-col justify-center items-center rounded-lg pb-20">
      <ReferralsList userId={currentUser.userId} data={allReferralsData.data.listReferrals.items} title={'Referrals'} listType={'report'}/>
      </div>
   </div>
  )
}