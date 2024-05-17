import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import { carouselSlides } from "@/lib/data/data"
import SignInForm from "@/components/forms/sign-in-form"
import Button from "@/components/buttons/button"

export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function Dashboard() {

  return (
     <div className="max-w-screen">
      <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
      <Nav mini/>
      <SignInForm/>
      <h2 className="relative text-6xl uppercase text-blue2 text-center bg-gray1 mx-auto max-w-md rounded full bg-opacity-75 mb-16 p-4 mt-16">Dashboard</h2>
      
      <div className="relative flex flex-col justify-center items-center rounded-lg py-20 bg-white/75 max-w-xl mx-auto gap-20">
          <div>
            <h3 className="flex text-2xl">
              Hi _______, 
            </h3>
            <p>
              Welcome to your CCFIL Dashboard!
            </p>
          </div>
          <Button link={'/dashboard/referrals'} text={'referrals'}/>
          <Button link={'/dashboard/profile'} text={'profile'}/>
          <Button link={'/dashboard/reports'} text={'reports'}/>
        </div>
        
   </div>
  )
}