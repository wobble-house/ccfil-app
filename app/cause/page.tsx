import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/info-segment"
import QuoteSection from "@/components/quote"
import Nav from "@/components/nav"

export const metadata = {
  title: 'Cause',
  description: 'Learn more about CCFIL',
}

const headerText =`Community is an integral part of everything we do.`
const bodyText = `Community is an essential part of our programming and it’s important that we give back to it. CC Cares is our unique peer volunteer group where residents get an opportunity to engage with local organizations to provide service to their community while optimizing executive functioning and peer interaction skills.`
const infoImage = {
  url: `https://ccfil.com/wp-content/uploads/2016/07/cc-cares.jpg`,
  alt: `image for website`
}
const quote = `It's our challenges and obstacles that give us layers of depth and make us interesting. Are they fun when they happen? No. But they are what make us unique.`
const quoteName = `ELLEN DEGENERES`
const quoteImgSrc = `https://ccfil.com/wp-content/uploads/2016/08/resident-quote.jpg`

export default function Cause() {
  return (
   <>
   <Nav metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl={null} Type="B"/>
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
