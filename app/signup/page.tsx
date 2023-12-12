import "server-only"
import { carouselSlides } from "@/lib/data/data"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import SignupForm from "@/components/forms/signup-form"
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const metadata = {
  title: 'Sign Up',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function SignUp() {
  return (
   <div className="relative flex flex-col justify-center items-center">
    <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
    <div className="relative flex flex-col gap-10 mx-auto justify-center items-center py-20">
      <h2 className="bg-white rounded-md p-4 bg-opacity-75">this is a dev site</h2>
      <SignupForm/>
    </div>
  <Nav mini/>
   </div>
  )
}