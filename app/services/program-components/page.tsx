import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment, {StickyInfoSegment, InfoBody} from "@/components/info-segment"
import Nav from "@/components/nav"

export const metadata = {
  title: 'Program Components',
  description: 'Learn more about CCFIL',
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
const accordionBodyText = `Accordion goes here`
const accordionImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/program-components.jpg`

const stickyHeaderText = `Additional Services`
const stickyBodyText = `We’re committed to supporting our residents in every way possible. This means that if needed, Community Connections will ensure that other therapies, outside of our services, are provided on a fee for service basis, such as:    `
const stickyImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/additional-services.jpg`


export default function ProgramComponents() {
  return (
   <>
      <Nav metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen py-5">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl={null} Type="B"/>
          <StickyInfoSegment captionText={servicesCaptionText} type="A">
          <InfoBody headerText={accordionHeaderText} bodyText={accordionBodyText} ImageUrl={accordionImageUrl} ButtonUrl={null}/>
          <InfoBody headerText={stickyHeaderText} bodyText={stickyBodyText} ImageUrl={stickyImageUrl} ButtonUrl={null}/>
          <div className="flex flex-col h-64 border-[8px] border-blue1 border-solid p-15 bg-blue1 justify-center items-center">
            <h2 className="text-white text-2xl font-bold text-center">Ready to chat a bit more?</h2>
            <button className="px-10 py-4 text-center bg-blue2 hover:bg-transparent hover:border-2 hover:border-blue1 rounded-full text-2xl font-bold text-white hover:text-blue2 mx-auto">Contact Us</button>
            </div>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
