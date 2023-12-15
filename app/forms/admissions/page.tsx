import "server-only"
import Nav from "@/components/navigation/nav"
import AdmissionsCreateForm from "@/components/forms/AdmissionsCreateForm"
import ProfileButton from "@/components/buttons/profile-button"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignOutButton from "@/components/buttons/signout-button"
import DashboardButton from "@/components/buttons/dashboard-button"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admissions',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Admissions() {
  return (
   <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <DashboardButton/>
      <ProfileButton/>
      <SignOutButton/>
      <AdmissionsCreateForm/>
   </div>
  )
}