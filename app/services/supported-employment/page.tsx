import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { NavHeader } from "@/components/header"

export const metadata = {
  title: 'Supported Employment',
  description: '',
  bgimage: 0
}

const supportedEmploymentText = `
Community Connections for Independent Living, LLC uses community-based situations as on-going learning experiences for our residents to improve in all domains of their rehabilitation, including vocational exploration. Through our Supported Employment Program, we give our residents opportunities to practice and further develop employability skills, enhance creativity, and support ambitions.
\\
We offer two opportunities for work placement; on-site and community based. Workers may transition between the two opportunities, or work both simultaneously, based on their individual abilities, interests, and work site availability. An Occupational Therapy Work Evaluation is completed prior to employment to help determine appropriate placement.


On-Site:
--------
A hands-on, curriculum-based program to facilitate development of pre-employment skills with direct supervision and an emphasis on:

- Identification of strengths, interest areas, and compensatory strategies for improving work performance.
- Soft skills training (i.e., time management, workplace etiquette, communication, customer service, teamwork)
- Computer skills
- Inventorying, bookkeeping, shipping, and general business organization
- Entrepreneurship fundamentals
- Activism and education on community resources and workplace accommodations


Community Based Work Site:
--------------------------
Individualized work sites are obtained through collaboration with community partners based on the worker’s skill set and interest areas that are both familiar and challenging.  Direct coaching and indirect supervision are utilized to monitor performance and ensure a supportive and successful work environment. Participation at this level may lead to future opportunities for competitive employment in the worker’s field of interest


Admission
---------
- Must be a resident of our Semi-Independent Residential Program
- Resident demonstrates sufficient interest in developing employability skills
- Resident would benefit from increased structure and can tolerate additional activities in their weekly schedule
- Resident has the capacity to maintain a schedule and will utilize compensatory strategies when needed to promote follow through with scheduled shifts
- Prescription for Supported Employment Program by resident’s treating physician


Discharge
---------
- Worker obtains a competitive employment position in the community
- Worker is unable to tolerate or commit to the objectives of their work site, prompting re-evaluation of placement
`
export default function SupportedEmployment() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
        <div className="flex mx-auto py-16 z-50 bg-white w-full justify-center">
        <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
        {supportedEmploymentText}
                </ReactMarkdown>
        </div>
        </Suspense>
      </Animation>
   </>
  )
}
