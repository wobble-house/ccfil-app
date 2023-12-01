import "server-only"
import Nav from "@/components/navigation/nav"
import SignInButton from "@/components/forms/signin"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Profile',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Profile() {
  return (
   <div className="relative top-0">
    <Nav/>
<SignInButton/>
<h2 className="bg-white text-black text-center">Dashboard</h2>

   </div>
  )
}