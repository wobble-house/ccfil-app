import "server-only"
import Nav from "@/components/navigation/nav"
import ReferralsCreateForm from "@/components/forms/ReferralsCreateForm"
import Link from "next/link"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignOutButton from "@/components/forms/signout-button"
import DashboardButton from "@/components/forms/dashboard-button"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Referrals',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Referrals() {
  return (
   <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <DashboardButton/>
      <SignOutButton/>
<ReferralsCreateForm/>
   </div>
  )
}