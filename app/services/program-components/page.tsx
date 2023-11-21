import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment, {StickyInfoSegment, InfoServiceBody, InfoBody} from "@/components/sections/info-segment"
import NavHeader from "@/components/header/header"
import { listServices } from "@/utils/graphql/queries"
import { API } from "@aws-amplify/api";
import { programComponentsData } from '@/lib/data/data'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const metadata = {
  title: 'Services',
  description: `Our residents' trust isn't freely given.  We earn it every day`
}
const programServices = await API.graphql({
  query: listServices
});

export default function ProgramComponents() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={3} />
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto w-full max-w-screen">
          <InfoSegment headerText={programComponentsData.headerText} bodyText={programComponentsData.bodyText} infoImage={programComponentsData.infoImage} ButtonUrl={null} Type="B" icon={'public/Icons/education.svg'} id={null}/>
          <StickyInfoSegment captionText={programComponentsData.serviceCaptionText} type="A" bgcolor="bg-gray1" id={null}>
          <InfoServiceBody headerText={programComponentsData.serviceHeaderText} data={programServices.data.listServices.items} ImageUrl={programComponentsData.serviceImageUrl} ButtonUrl={null}/>
          <InfoBody headerText={programComponentsData.stickyHeaderText} bodyText={programComponentsData.stickyBodyText} ImageUrl={programComponentsData.stickyImageUrl} ButtonUrl={null}/>
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
