import "server-only"
import InfoSegment from "@/components/sections/info-segment"
import QuoteSection from "@/components/sections/quote"
import NavHeader from "@/components/header/header"
import { carouselSlides, homeData } from "@/lib/data/data"

export const metadata = {
  title: 'Home',
  description: 'Learn More About CCFIL'
} 

export default function Home() {
  return (
   <>
      <NavHeader description={carouselSlides[0].description} title={carouselSlides[0].title} bgimage={1}/>
          <div className="flex flex-col w-full bg-white">
          <InfoSegment headerText={homeData.headerText} bodyText={homeData.bodyText} infoImage={homeData.infoImage} ButtonUrl="/about" Type="A" icon={'public/Icons/page.svg'} id={null}/>
          <QuoteSection quote={homeData.quote} quoteName={homeData.quoteName} quoteImgSrc={homeData.quoteImgSrc}/>
          </div>
   </>
  )
}
