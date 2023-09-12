import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import InfoSegment from "@/components/info-segment"

export const metadata = {
  title: 'Cause',
  description: 'Learn more about CCFIL',
}

const headerText =`Community is an integral part of everything we do.`
const bodyText = `Community is an essential part of our programming and it’s important that we give back to it. CC Cares is our unique peer volunteer group where residents get an opportunity to engage with local organizations to provide service to their community while optimizing executive functioning and peer interaction skills.`
const ImageUrl = `https://ccfil.com/wp-content/uploads/2016/07/cc-cares.jpg`

export default function Cause() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen py-5">
          <InfoSegment headerText={headerText} bodyText={bodyText} ImageUrl={ImageUrl} ButtonUrl={null} Type="B"/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
