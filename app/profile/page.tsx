import "server-only"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignOutButton from "@/components/buttons/signout-button"
import DashboardButton from "@/components/buttons/dashboard-button"
import AuthGetCurrentUserServer from "@/components/cards/user-profile"
import { getSingleTeamMember } from "@/utils/getData/get-data"
import { GetTeamMemberQueryVariables } from "@/utils/graphql/API"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Profile',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}



export default async function Profile() {
  
  return (
    <div className="max-w-screen">
    <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
    <Nav mini/>
    <DashboardButton/>
    <SignOutButton/>
    <AuthGetCurrentUserServer/>
 </div>
  )
}