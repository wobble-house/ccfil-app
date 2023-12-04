import "server-only"
import Nav from "@/components/navigation/nav"
import ReferralsCreateForm from "@/app/ui-components/ReferralsCreateForm"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Referrals',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default async function Referrals() {
  return (
   <div className="relative flex flex-col top-0 justify-center items-center">
  <Nav mini/>
  <h2 className="bg-white text-black">Referrals</h2>
  <button className={`border-2 border-blue2 rounded-full px-4 my-2 hover:scale-[1.02] hover:bg-blue2 hover:text-white active:scale-95`}><Link href="/dashboard">Dashboard</Link></button>
<ReferralsCreateForm/>
   </div>
  )
}