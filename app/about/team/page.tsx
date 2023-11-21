import 'server-only'
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment,{ StickyInfoSegment} from "@/components/sections/info-segment"
import QuoteSection from "@/components/sections/quote"
import { InfoCardList } from "@/components/cards/list"
import NavHeader from "@/components/header/header"
import { API } from "@aws-amplify/api";
import { listTeamMembers } from "@/utils/graphql/queries";
import {ListTeamMembersQueryVariables} from "@/utils/graphql/API"
import { teamData } from '@/lib/data/data'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const metadata = {
  title: 'About Us',
  description: 'Hello. We’re Community Connections for Independent Living.'
}
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
// List execs
const execTeamMembers = await API.graphql({
  query: listTeamMembers,
  variables: execVariables
});
// List Team
const teamMembers = await API.graphql({
  query: listTeamMembers,
  variables: teamVariables
});

export default function Team() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={4}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="relative flex flex-col w-full">
          <InfoSegment headerText={teamData.headerText} bodyText={teamData.bodyText} infoImage={teamData.infoImage} ButtonUrl={null} Type="A" icon={'public/Icons/compassion.svg'} id={null}/>
          <StickyInfoSegment captionText={teamData.leadershipCaptionText} type="B" bgcolor='bg-gray1' id={'Leadership'}>
            <InfoCardList data={execTeamMembers.data.listTeamMembers.items}/>
          </StickyInfoSegment>
          <QuoteSection quote={teamData.quote} quoteName={teamData.quoteName} quoteImgSrc={teamData.quoteImgSrc}/>
          <StickyInfoSegment captionText={teamData.teamCaptionText} type="A" bgcolor="bg-white" id={'Team'}>
            <InfoCardList data={teamMembers.data.listTeamMembers.items}/>
          </StickyInfoSegment>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
