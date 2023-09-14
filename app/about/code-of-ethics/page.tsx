import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Nav from "@/components/nav"

export const metadata = {
  title: 'Code of Ethics',
  description: 'Learn more about CCFIL',
}
const codeOfEthics = `
Philosophy & Intent
-------------------

Community Connections for Independent Living, LLC is committed to understanding  and respecting the diverse characteristics that embody our residents, employees,  community, and stakeholders. With ongoing education and evaluation, Community  Connections for Independent Living, LLC will continue to provide quality, meaningful  services that embrace all aspects of diversity such as culture, age, race, gender  identification, sexual orientation, socioeconomic status, ethnic background, religious  beliefs, and language.\
\\
\\
Ethical standards and Codes of Conduct reflecting the above philosophy are established in our Employee Handbook, policies and procedures, employee training, and  organizational mission. 

Commitment to Improvement
-------------------------

Cultural competency will be measured by formal and informal feedback from our  residents, employees, and stakeholders via general communication and observations, annual surveys, and quarterly review of compliance reports, which will help guide our  Cultural Competency and Diversity Objectives. 

Accessibility
-------------

If you, your family member, or your client require auxiliary aids or services, or a  language interpreter, please contact us at 248-410-2715.  

Compliance Concerns
-------------------

For any concerns regarding compliance, please utilize the following methods to share  your experience. Our unique company ID is required for submission: 4836145671
\\
Toll-Free Number: 1-855-662-7233
Website: www.safehotline.com`

export default function CodeOfEthics() {
  return (
   <>
   <Nav metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-6xl py-20">
          <ReactMarkdown className="markdown p-2 list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
               {codeOfEthics}
                </ReactMarkdown>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
