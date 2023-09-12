import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/info-segment"

export const metadata = {
  title: 'Team',
  description: 'Learn more about CCFIL',
}

const headerText =`We’re a thoughtful, trusted company that treats residents and staff like family.`
const bodyText = `We respect our residents’ dignity and autonomy. That’s why all of CCFIL’s treatment plans are individualized. Instead of telling a new resident what our program includes, we take the time to discuss with them what they are interested in, what their goals are, and how we can help them. We realize catering to our residents’ individual needs is different, but it’s why our programming has been so successful.

Our rehabilitation plans hinge on two main elements: positive behavioral support programing and community-based experiences. We believe positive behavioral support is the best way to help residents learn how to assume responsibility for their health and specific needs.

We also use community-based experiences as a way of providing our residents with real-world based cognitive rehabilitation that will help them reintegrate back into their home community.

Together our cognitive programs, positive behavior supports, and learning approach to prosocial skills truly is what sets us apart.`
const ImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/CCFILAboutUsBW.jpg`

export default function Team() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen py-5">
          <InfoSegment headerText={headerText} bodyText={bodyText} ImageUrl={ImageUrl} ButtonUrl={null} Type="A"/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
