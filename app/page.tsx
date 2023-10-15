import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "./loading"
import InfoSegment from "@/components/info-segment"
import QuoteSection from "@/components/quote"
import { NavHeader } from "@/components/header"
import {NavLink, NavListLink, NavListInnerLink, aboutList, servicesList } from "@/components/nav-links"

export const metadata = {
  title: 'Home',
  description: 'Learn More About CCFIL',
  bgimage: 1
} 


const headerText =`We provide supported independent living, dedicated to community re-entry.`
const bodyText = `Community Connections provides supported independent living services to individuals with brain injuries whom have successfully progressed through clinical rehabilitation programs. When they enter our program they are now in need of a comprehensive, community-based living and learning program. We recognize that each person is different and that their head injury is different. Their problems are different. Therefore, we use individualized, community-based situations as on-going learning tools to improve skills in the areas of executive functioning, visual processing, and information processing all while improving memory and attention deficits.`
const infoImage = {
  url: `https://ccfil.com/wp-content/uploads/2016/05/CCFILBW.jpg`,
  alt: `image for website`
}
const quoteImgSrc = `https://ccfil.com/wp-content/uploads/2016/08/motivational-guote-2.jpg`
const quote = `Nothing is impossible, the word itself says, 'I'm possible'!`
const quoteName = `Audrey Hepburn`
export default function Home() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full bg-white">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl="/about" Type="A"/>
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
