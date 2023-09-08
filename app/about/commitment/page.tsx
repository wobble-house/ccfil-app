import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/info-segment"

export const metadata = {
  title: 'Commitment',
  description: 'Learn more about CCFIL',
}

const headerText =`We are committed to enhancing the daily lives of all our residents.`
const bodyText = `Community Connections provides a comprehensive, semi-independent community-based living program for individuals affected by traumatic brain injury. Cognitive, social, vocational, and educational components are integrated into each resident’s individualized treatment plan, which is facilitated by both the resident and our dedicated occupational therapists and rehabilitation specialists.`
const ImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/CCFILCampusLifeBW.jpg`

export default function Commitment() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen mt-20 py-5">

          <InfoSegment headerText={headerText} bodyText={bodyText} ImageUrl={ImageUrl} ButtonUrl={null} Type="A"/>

          </div>
        </Suspense>
      </Animation>
   </>
  )
}
