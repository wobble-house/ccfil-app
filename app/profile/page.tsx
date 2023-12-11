import "server-only"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignOutButton from "@/components/forms/signout-button"
import DashboardButton from "@/components/forms/dashboard-button"


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
    <div className="flex relative mx-auto">
    <h2 className="relative mx-auto text-center bg-white bg-opacity-75 p-4 rounded-md">My Profile</h2>
    </div>
 </div>
  )
}