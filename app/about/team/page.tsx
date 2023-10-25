import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment,{ StickyInfoSegment} from "@/components/info-segment"
import QuoteSection from "@/components/quote"
import { InfoCardList, FeaturedCardList } from "@/components/list"
import { teamCardListData } from "@/components/data/data"
import { NavHeader } from "@/components/header"

export const metadata = {
  title: 'About Us',
  description: 'Hello. We’re Community Connections for Independent Living.',
  bgimage: 4
}

const headerText =`We’re a thoughtful, trusted company that treats residents and staff like family.`
const bodyText = `We respect our residents’ dignity and autonomy. That’s why all of CCFIL’s treatment plans are individualized. Instead of telling a new resident what our program includes, we take the time to discuss with them what they are interested in, what their goals are, and how we can help them. We realize catering to our residents’ individual needs is different, but it’s why our programming has been so successful.
\\
Our rehabilitation plans hinge on two main elements: positive behavioral support programing and community-based experiences. We believe positive behavioral support is the best way to help residents learn how to assume responsibility for their health and specific needs.
\\
We also use community-based experiences as a way of providing our residents with real-world based cognitive rehabilitation that will help them reintegrate back into their home community.
\\
Together our cognitive programs, positive behavior supports, and learning approach to prosocial skills truly is what sets us apart.`
const infoImage = {
  url: `https://ccfil.com/wp-content/uploads/2016/07/CCFILAboutUsBW.jpg`,
  alt: `image for website`
}
const quote = `It's our challenges and obstacles that give us layers of depth and make us interesting. Are they fun when they happen? No. But they are what make us unique.`
const quoteName = `ELLEN DEGENERES`
const quoteImgSrc = `https://ccfil.com/wp-content/uploads/2016/08/resident-quote.jpg`
const leadershipCaptionText = `Leadership`
const teamCaptionText = `Our Team`

export default function Team() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="relative flex flex-col w-full">
          <InfoSegment headerText={headerText} bodyText={bodyText} infoImage={infoImage} ButtonUrl={null} Type="A" icon={'/Icons/Icons/compassion.svg'} id={null}/>
          <StickyInfoSegment captionText={leadershipCaptionText} type="B" bgcolor='bg-gray1' id={'Leadership'}>
            <FeaturedCardList data={teamCardListData}/>
          </StickyInfoSegment>
          
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          
          <StickyInfoSegment captionText={teamCaptionText} type="A" bgcolor="bg-white" id={'Team'}>
            <InfoCardList data={teamCardListData}/>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
