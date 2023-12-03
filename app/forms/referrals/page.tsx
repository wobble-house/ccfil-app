import "server-only"
import Nav from "@/components/navigation/nav"
import ReferralsCreateForm from "@/app/ui-components/ReferralsCreateForm"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Referrals',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Referrals() {
  return (
   <div className="relative flex flex-col top-0 justify-center items-center">
  <Nav/>
  <h2 className="bg-white text-black">Referrals</h2>
<ReferralsCreateForm/>
   </div>
  )
}