import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/info-segment"
import QuoteSection from "@/components/quote"
import { NavHeader } from "@/components/header"
import { InfoBody, StickyInfoSegment } from "@/components/info-segment"

export const metadata = {
  title: 'Meet CC Cares.',
  description: `Caring for community doesn't stop inside our doors.`,
  bgimage: 5
}

const headerText =`Community is an integral part of everything we do.`
const bodyText = `Community is an essential part of our programming and it’s important that we give back to it. CC Cares is our unique peer volunteer group where residents get an opportunity to engage with local organizations to provide service to their community while optimizing executive functioning and peer interaction skills.`
const infoImage = {
  url: `https://ccfil.com/wp-content/uploads/2016/07/cc-cares.jpg`,
  alt: `image for website`
}
const quote = `It's our challenges and obstacles that give us layers of depth and make us interesting. Are they fun when they happen? No. But they are what make us unique.`
const quoteName = `ELLEN DEGENERES`
const quoteImgSrc = `https://ccfil.com/wp-content/uploads/2016/08/resident-quote-3.jpg`
const stickyHeaderText = `We Are Always Looking for Ways to Improve People’s Lives`
const stickyBodyText = `Residents and staff meet weekly to discuss innovative ideas to positively impact their community. In addition to participating with surrounding shelters, food banks, retirement homes, and non-profit organizations, CC Cares is frequently providing happiness to individuals through “Random Acts of Kindness”.

CC Cares is a structured, philanthropic group that highlights the importance of teamwork, appropriate social interactions, generosity, and charity. Opportunities to make a difference are endless; CC Cares allows residents to advocate for their organizations of interest, which helps build confidence that will ultimately restore their independence
`
const stickyImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/make-a-difference.jpg`
const causeCaptionText = `How We Make a difference`

export default function Cause() {
  return (
   <>
   <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl={null} Type="B" icon={'/Icons/Icons/shirt.svg'}/>
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          <StickyInfoSegment captionText={causeCaptionText} type="A" bgcolor="bg-gray1">
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
