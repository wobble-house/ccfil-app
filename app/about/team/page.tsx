import 'server-only'
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment,{ StickyInfoSegment} from "@/components/sections/info-segment"
import QuoteSection from "@/components/sections/quote"
import { InfoCardList } from "@/components/cards/list"
import NavHeader from "@/components/header/header"
import {ListTeamMembersQueryVariables} from "@/utils/graphql/API"
import { aboutTeamData } from '@/lib/data/data'
import { getTeamData } from '@/utils/getData/get-data'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const metadata = {
  title: 'About Us',
  description: 'Hello. We’re Community Connections for Independent Living.'
};
const execVariables: ListTeamMembersQueryVariables = {
  filter: {
    isFeatured: {
      eq: true
    }
  }
};
const teamVariables: ListTeamMembersQueryVariables = {
  filter: {
    isFeatured: {
      eq: false
    }
  }
};
export default async function Team() {
  const teamData = await getTeamData(teamVariables);
  const execData = await getTeamData(execVariables);
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={4}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="relative flex flex-col w-full">
          <InfoSegment headerText={aboutTeamData.headerText} bodyText={aboutTeamData.bodyText} infoImage={aboutTeamData.infoImage} ButtonUrl={null} Type="A" icon={'public/Icons/compassion.svg'} id={null}/>
          <StickyInfoSegment captionText={aboutTeamData.leadershipCaptionText} type="B" bgcolor='bg-gray1' id={'Leadership'}>
            <InfoCardList data={execData.data.listTeamMembers.items}/>
          </StickyInfoSegment>
          <QuoteSection quote={aboutTeamData.quote} quoteName={aboutTeamData.quoteName} quoteImgSrc={aboutTeamData.quoteImgSrc}/>
          <StickyInfoSegment captionText={aboutTeamData.teamCaptionText} type="A" bgcolor="bg-white" id={'Team'}>
            <InfoCardList data={teamData.data.listTeamMembers.items}/>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
};
