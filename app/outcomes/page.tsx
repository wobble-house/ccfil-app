import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import QuoteSection from "@/components/quote"
import { NavHeader } from "@/components/header"
import { StickyInfoSegment } from "@/components/info-segment"
import { FeaturedCardList } from "@/components/list"
import { testimonialCardListData } from "@/components/data/data"
import ImageHandler from "@/components/image-handler"

export const metadata = {
  title: 'Outcomes',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`,
  bgimage: 0
}

const quote = `It's our challenges and obstacles that give us layers of depth and make us interesting. Are they fun when they happen? No. But they are what make us unique.`
const quoteName = `ELLEN DEGENERES`
const quoteImgSrc = `public/Images/resident-quote.jpg`
const outcomesCaptionText = `Real Stories from Real Residents`

export default function Outcomes() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
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
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          <StickyInfoSegment captionText={outcomesCaptionText} type="B" bgcolor='bg-white' id={null}>
            <FeaturedCardList data={testimonialCardListData}/>
          </StickyInfoSegment>
        </Suspense>
      </Animation>
   </>
  )
}
