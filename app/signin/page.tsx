import "server-only"
import NavHeader from "@/components/header/header"
import { carouselSlides } from "@/lib/data/data"
import SignInButton from "@/components/forms/signin"
import AuthForm from "@/components/forms/sign-in-form"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"

export const metadata = {
  title: 'Login',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Signin() {
  return (
   <div className="relative flex flex-col top-0 ">
    

    <HeaderBGCarousel carouselSlides={carouselSlides} position={"fixed"}/>
    <SignInButton/>
  <Nav/>
   </div>
  )
}