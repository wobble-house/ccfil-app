import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import QuoteSection from "@/components/sections/quote"
import NavHeader from "@/components/header/header"
import { StickyInfoSegment } from "@/components/sections/info-segment"
import { InfoCardList } from "@/components/cards/list"
import { testimonialCardListData, outcomesData } from "@/lib/data/data"
import ImageHandler from "@/components/image-handler"

export const metadata = {
  title: 'Login',
  description: `Improved quality of life is our set standard; we won't settle for anything less.`
}

export default function Login() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={0}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
            <div className="flex relative z-50 w-full h-full bg-gray1 mx-auto justify-center p-16">
            </div>
        </Suspense>
      </Animation>
   </>
  )
}
