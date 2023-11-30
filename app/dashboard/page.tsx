import "server-only"
import NavHeader from "@/components/header/header"
import { carouselSlides } from "@/lib/data/data"
import SignInButton from "@/components/signin"
import AuthForm from "@/components/forms/auth-form"
import Nav from "@/components/navigation/nav"
import { HeaderBGCarousel } from "@/components/header/header-bg-carousel"

export const metadata = {
  title: 'Dashboard',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Dashboard() {
  return (
   <div className="relative flex flex-col top-0 justify-center items-center">
<h2 className="bg-white text-black">Dashboard</h2>
  <Nav/>
   </div>
  )
}