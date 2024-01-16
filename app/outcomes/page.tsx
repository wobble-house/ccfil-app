import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import QuoteSection from "@/components/sections/quote"
import NavHeader from "@/components/header/header"
import { StickyInfoSegment } from "@/components/sections/info-segment"
import { InfoCardList } from "@/components/cards/list"
import { testimonialCardListData, outcomesData } from "@/lib/data/data"
import ImageHandler from "@/utils/image-handler"

export const metadata = {
  title: 'Outcomes',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default function Outcomes() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={0}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
              <div className="flex relative z-50 w-full h-full bg-gray1 mx-auto justify-center p-16">
            <ImageHandler src="public/Images/CCFIL-DemographicsInfographic_v02-768x1199.png" 
            width={623} 
            height={973} 
            alt="demographic infographic" 
            priority
            className="relative"/>
          </div>
          <QuoteSection id={`outcomesquote`} quote={outcomesData.quote} quoteName={outcomesData.quoteName} quoteImgSrc={outcomesData.quoteImgSrc}/>
          <StickyInfoSegment captionText={outcomesData.outcomesCaptionText} type="B" bgcolor='bg-white' id={null}>
            <InfoCardList data={testimonialCardListData}/>
          </StickyInfoSegment>
        </Suspense>
      </Animation>
   </>
  )
}
