import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "./loading"
import InfoSegment from "@/components/info-segment"

export const metadata = {
  title: 'Home',
  description: 'Learn more about CCFIL',
} 
const headerText =`We provide supported independent living, dedicated to community re-entry.`
const bodyText = `Community Connections provides supported independent living services to individuals with brain injuries whom have successfully progressed through clinical rehabilitation programs. When they enter our program they are now in need of a comprehensive, community-based living and learning program. We recognize that each person is different and that their head injury is different. Their problems are different. Therefore, we use individualized, community-based situations as on-going learning tools to improve skills in the areas of executive functioning, visual processing, and information processing all while improving memory and attention deficits.`
const ImageUrl = `https://ccfil.com/wp-content/uploads/2016/05/CCFILBW.jpg`

export default function Home() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex max-w-screen mt-20 py-5 z-10 w-full bg-white">
          <InfoSegment headerText={headerText} bodyText={bodyText} ImageUrl={ImageUrl} ButtonUrl="/about" Type="A"/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
