import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment, { StickyInfoSegment, InfoBody } from "@/components/info-segment"
import QuoteSection from "@/components/quote"
import { NavHeader } from "@/components/header"
import { InfoCardList } from "@/components/list"
import { testimonialCardListData } from "@/components/data/data"

export const metadata = {
  title: 'Our Commitment',
  description: `Our residents' motivation, achievement, and happiness is our top priority.`,
  bgimage: 2
}

const headerText =`We are committed to enhancing the daily lives of all our residents.`
const bodyText = `Community Connections provides a comprehensive, semi-independent community-based living program for individuals affected by traumatic brain injury. Cognitive, social, vocational, and educational components are integrated into each resident’s individualized treatment plan, which is facilitated by both the resident and our dedicated occupational therapists and rehabilitation specialists.`
const infoImage = {
  url: `public/Images/CCFILCampusLifeBW.jpg`,
  alt: `image for website`
}
const captionText = "Enriching Our Residents' Lives"
const stickyHeaderText = `Independence and ownership are encouraged and supported on entry into our program.`
const stickyBodyText = `Community Connections acknowledges that each resident has unique routines and interests prior to admission; it is our mission to respect, uphold, and enhance the daily lives of our residents while guiding them towards greater self-reliance and community reentry. Each resident frequently meets with our rehabilitation specialists to ensure progress towards their individualized treatment goals while maintaining choice-driven objectives. Community Connections believes that residents’ motivation, achievement, and happiness are maximized by our innovative approach to cognitive-behavioral programming coupled with our compassionate and encouraging support staff.
\\
In addition to numerous opportunities to participate in peer support groups and therapeutic recreational activities, residents of our program are provided with a furnished apartment, utilities, cable/internet services, and transportation to community outings and medical appointments. Community Connections is also distinct from other programs as we welcome spouses and children of our residents. Residents’ family dynamics are incorporated into their Individualized Treatment Plans to ensure continued positive, healthy relationships.
\\
Community Connections provides a supportive living environment through a multidisciplinary approach to community integration. We are committed to excellence to enrich the lives of our residents and the community in which they live.`
const stickyImageUrl = `public/Images/CCFILCampusLifeTile.jpg`
const quote = `It’s good to push yourself and do what you don’t necessarily want to do, that if you’re not automatically good at it, you should try. Trying is so important.`
const quoteName = `Meryl Streep`
const quoteImgSrc = `public/Images/Quotes/happiness-quote.jpg`
const commitmentCaptionText = `Real Stories from Real Residents`


export default function Commitment() {
  
  return (
   <>
    <NavHeader description={metadata.description} title={metadata.title} metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl={null} Type="A" icon={'public/Icons/plant.svg'} id={null}/>
          <StickyInfoSegment captionText={captionText} type="A" bgcolor="bg-gray1" id={null}>
          <InfoBody headerText={stickyHeaderText} bodyText={stickyBodyText} ImageUrl={stickyImageUrl} ButtonUrl={null}/>
          </StickyInfoSegment>
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          <StickyInfoSegment captionText={commitmentCaptionText} type="B" bgcolor='bg-gray1' id={null}>
            <InfoCardList data={testimonialCardListData}/>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
