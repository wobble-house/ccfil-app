import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment, {StickyInfoSegment, InfoAccordionBody, InfoBody} from "@/components/info-segment"
import { NavHeader } from "@/components/header"
import { accordionData } from "@/components/data"

export const metadata = {
  title: 'Services',
  description: `Our residents' trust isn't freely given.  We earn it every day`,
  bgimage: 3
}

const headerText =`All services we provide are based on over a decade of doing the right thing.`
const bodyText = `We don’t believe in a “one size fits all” solution. All our treatment plans are tailored to fit the unique needs of each and every one of our residents. Staff and residents together come up with goals all of which are designed to be both determinable and measurable.

We believe in working with our residents to figure out what they need in order to move forward. At any stage of the process, we are willing to reevaluate the plan if needed. While the way forward for everyone may be different, the end result is always the same, helping our residents move forward.`
const infoImage = {
  url: `https://ccfil.com/wp-content/uploads/2016/07/services.jpg`,
  alt: `image for website`
}
const servicesCaptionText = `Program Overview`

const accordionHeaderText = `Program Components`
const accordionImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/program-components.jpg`

const stickyHeaderText = `Additional Services`
const stickyBodyText = `We’re committed to supporting our residents in every way possible. This means that if needed, Community Connections will ensure that other therapies, outside of our services, are provided on a fee for service basis, such as:
 
- Physical Therapy
- Speech/Language Pathology
`
const stickyImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/additional-services.jpg`


export default function ProgramComponents() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto w-full max-w-screen py-5">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl={null} Type="B"/>
          <StickyInfoSegment captionText={servicesCaptionText} type="A" bgcolor="bg-gray1">
          <InfoAccordionBody headerText={accordionHeaderText} items={accordionData} ImageUrl={accordionImageUrl} ButtonUrl={null}/>
          <InfoBody headerText={stickyHeaderText} bodyText={stickyBodyText} ImageUrl={stickyImageUrl} ButtonUrl={null}/>
          <div className="flex flex-col h-64 bg-blue1 justify-center items-center p-10">
            <div className={`flex flex-col border-solid border-[8px] border-white w-full h-full justify-center gap-5`}>
            <h2 className="text-white text-2xl font-bold text-center">Ready to chat a bit more?</h2>
            <button className="px-10 py-2 text-center bg-blue2 bg-transparent border-[3px] border-white hover:bg-white rounded-full text-xl font-bold text-white hover:text-blue2 mx-auto uppercase">Contact Us</button>
            </div>
            </div>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
