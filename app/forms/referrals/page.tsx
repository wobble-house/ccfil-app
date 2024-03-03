import "server-only"
import { carouselSlides } from "@/lib/data/data"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import ReferralsCreateForm from "@/components/forms/ReferralsCreateForm"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Referrals',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Referrals() {
  return (
  <div className="relative flex flex-col top-0 justify-center items-center">
    <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
    <div className="relative mx-auto justify-center items-center pt-20">
      <button className={`border-2 border-blue2 rounded-full px-4 my-2 hover:scale-[1.02] hover:bg-blue2 hover:text-white active:scale-95`}><Link href="/dashboard">Dashboard</Link></button>
      <ReferralsCreateForm/>
    </div>
    <Nav mini/>
  </div>
  )
}