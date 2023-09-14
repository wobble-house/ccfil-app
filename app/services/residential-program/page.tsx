import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export const metadata = {
  title: 'Semi-Independent Residential Program',
  description: 'Learn more about CCFIL',
}

const semiIndependentResidentialProgram = `
Admission Criteria
------------------

 - Minimum of 18 years old
 - Primary diagnosis of Traumatic Brain Injury (TBI)
 - Understanding of and in agreement with our Resident Agreement and policies for Semi-Independent Residential Programming
 - Independent or modified independent with all basic ADL and functional transfers within the home environment
 - Ability to demonstrate awareness of appropriate basic safety and emergency responses
 - Does not require daily skilled nursing or 24-hour supervision
 - Need for and ability to tolerate and engage in 4-6 hours of Occupational Therapy services per week, with additional programming as determined by evaluation
 - Free of violent behaviors; no danger to self or others
 - Prescription for Semi-Independent Residential Programming from treating physician
 - Occupational Therapy evaluations supporting this level of programming include, but are not limited to, Independent Living Scales (ILS), Mayo-Portland Adaptability Index (MPAI), and Assessment of Motor and Process Skills (AMPS).


Transition/Discharge
--------------------

- A modified level of care is needed, as determined by their internal and external support team, and/or prescribing physician
- Resident’s choices and behaviors no longer align with the Resident Agreement, and conflict with their individualized rehabilitation goals
`
export default function ResidentialProgram() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
        <ReactMarkdown className="markdown p-2 text-left pt-20" remarkPlugins={[remarkGfm, remarkBreaks]}>
        {semiIndependentResidentialProgram}
                </ReactMarkdown>
        </Suspense>
      </Animation>
   </>
  )
}
