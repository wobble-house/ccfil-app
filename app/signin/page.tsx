import "server-only"
import { carouselSlides } from "@/lib/data/data"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"
import SigninForm from "@/components/forms/sign-in-form"
import { currentAuthenticatedUser } from "@/utils/auth-helpers"

export const metadata = {
  title: 'Login',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Signin() {

  return (
   <div className="relative flex flex-col top-0 justify-center items-center">
    <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
    <div className="relative mx-auto justify-center items-center">
      <h2>this is a dev site</h2>
    <SigninForm/>
    </div>
  <Nav mini/>
   </div>
  )
}