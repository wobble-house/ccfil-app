import "server-only"
import NavHeader from "@/components/header/header"
import { carouselSlides } from "@/lib/data/data"
import SignInButton from "@/components/signin"

export const metadata = {
  title: 'Login',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Signin() {
  return (
   <>
        <NavHeader description={carouselSlides[0].description} title={carouselSlides[0].title} bgimage={1}/>
            <div className="flex z-50 w-full h-full bg-white mx-auto justify-center p-16 min-h-screen">
              
              <SignInButton/>
            </div>
   </>
  )
}