import "server-only"
import { Suspense } from "react"
import Loading from "./loading"
import InfoSegment from "@/components/info-segment"
import QuoteSection from "@/components/quote"
import { NavHeader } from "@/components/header"
import { carouselSlides } from "@/components/data/data"

export const metadata = {
  title: 'Home',
  description: 'Learn More About CCFIL',
  bgimage: 1
} 


const headerText =`We provide supported independent living, dedicated to community re-entry.`
const bodyText = `Community Connections provides supported independent living services to individuals with brain injuries whom have successfully progressed through clinical rehabilitation programs. When they enter our program they are now in need of a comprehensive, community-based living and learning program. We recognize that each person is different and that their head injury is different. Their problems are different. Therefore, we use individualized, community-based situations as on-going learning tools to improve skills in the areas of executive functioning, visual processing, and information processing all while improving memory and attention deficits.`
const infoImage = {
  url: `public/Images/CCFILBW.jpg`,
  alt: `image for website`
}
const quoteImgSrc = `public/Images/Quotes/motivational-guote-2.jpg`
const quote = `Nothing is impossible, the word itself says, 'I'm possible'!`
const quoteName = `Audrey Hepburn`

export default function Home() {
  return (
   <>
      <NavHeader description={carouselSlides[0].description} title={carouselSlides[0].title} metadata={metadata} headerButton={{url: "/about/team#Leadership", title: "LEARN MORE"}}/>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full bg-white overflow-clip">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl="/about" Type="A" icon={'public/Icons/page.svg'} id={null}/>
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          </div>
        </Suspense>
   </>
  )
}
