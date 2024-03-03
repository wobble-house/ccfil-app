import "server-only"
import { carouselSlides } from "@/lib/data/data"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import ReferralsCreateForm from "@/components/forms/ReferralsCreateForm"
import SignInForm from "@/components/forms/sign-in-form"

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
      
      <ReferralsCreateForm/>
    </div>
    <Nav mini/>
    <SignInForm/>
  </div>
  )
}