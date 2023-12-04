import "server-only"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInButton from "@/components/forms/signin"
import { ReferralsList } from "@/components/cards/list"
import { getReferrals } from '@/utils/getData/get-data'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const metadata = {
  title: 'Dashboard',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Dashboard() {
  const referralsData = await getReferrals()
  return (
     <div className="">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInButton/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4">Dashboard</h2>
      <div className=" px-4 md:px-20 lg:px-32 mx-auto rounded-lg overflow-hidden">
        <ReferralsList data={referralsData.data.listReferrals.items}/>
        </div>
   </div>
  )
}