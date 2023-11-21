import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment, { StickyInfoSegment, InfoBody } from "@/components/sections/info-segment"
import QuoteSection from "@/components/sections/quote"
import NavHeader from "@/components/header/header"
import { InfoCardList } from "@/components/cards/list"
import { testimonialCardListData, commitmentData } from "@/lib/data/data"

export const metadata = {
  title: 'Our Commitment',
  description: `Our residents' motivation, achievement, and happiness is our top priority.`
}

export default function Commitment() {
  
  return (
   <>
    <NavHeader description={metadata.description} title={metadata.title} bgimage={2}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full">
          <InfoSegment headerText={commitmentData.headerText} bodyText={commitmentData.bodyText} infoImage={commitmentData.infoImage} ButtonUrl={null} Type="A" icon={'public/Icons/plant.svg'} id={null}/>
          <StickyInfoSegment captionText={commitmentData.captionText} type="A" bgcolor="bg-gray1" id={null}>
          <InfoBody headerText={commitmentData.stickyHeaderText} bodyText={commitmentData.stickyBodyText} ImageUrl={commitmentData.stickyImageUrl} ButtonUrl={null}/>
          </StickyInfoSegment>
          <QuoteSection quote={commitmentData.quote} quoteName={commitmentData.quoteName} quoteImgSrc={commitmentData.quoteImgSrc}/>
          <StickyInfoSegment captionText={commitmentData.commitmentCaptionText} type="B" bgcolor='bg-gray1' id={null}>
            <InfoCardList data={testimonialCardListData}/>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
