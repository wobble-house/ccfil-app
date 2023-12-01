import "server-only"
import Nav from "@/components/navigation/nav"

export const dynamic = 'force-dynamic'

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