import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/info-segment"

export const metadata = {
  title: 'Program Components',
  description: 'Learn more about CCFIL',
}

const headerText =`All services we provide are based on over a decade of doing the right thing.`
const bodyText = `We don’t believe in a “one size fits all” solution. All our treatment plans are tailored to fit the unique needs of each and every one of our residents. Staff and residents together come up with goals all of which are designed to be both determinable and measurable.

We believe in working with our residents to figure out what they need in order to move forward. At any stage of the process, we are willing to reevaluate the plan if needed. While the way forward for everyone may be different, the end result is always the same, helping our residents move forward.`
const ImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/services.jpg`

export default function ProgramComponents() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen mt-20 py-5">
          <InfoSegment headerText={headerText} bodyText={bodyText} ImageUrl={ImageUrl} ButtonUrl={null} Type="B"/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
