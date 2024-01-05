import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/sections/info-segment"
import QuoteSection from "@/components/sections/quote"
import NavHeader from "@/components/header/header"
import { InfoBody, StickyInfoSegment } from "@/components/sections/info-segment"
import { causeData } from "@/lib/data/data"

export const metadata = {
  title: 'Meet CC Cares.',
  description: `Caring for community doesn't stop inside our doors.`
}

export default function Cause() {
  return (
   <>
   <NavHeader description={metadata.description} title={metadata.title} bgimage={5}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full">
          <InfoSegment headerText={causeData.headerText} bodyText={causeData.bodyText} infoImage={causeData.infoImage} ButtonUrl={null} Type="B" icon={'public/Icons/shirt.svg'} id={null} overscroll/>
          <QuoteSection id={'causequote'} quote={causeData.quote} quoteName={causeData.quoteName} quoteImgSrc={causeData.quoteImgSrc}/>
          <StickyInfoSegment captionText={causeData.causeCaptionText} type="A" bgcolor="bg-gray1" id={null}>
          <InfoBody headerText={causeData.stickyHeaderText} bodyText={causeData.stickyBodyText} ImageUrl={causeData.stickyImageUrl} ButtonUrl={null}/>
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
