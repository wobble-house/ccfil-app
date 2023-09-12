import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import QuoteSection from "@/components/quote"

export const metadata = {
  title: 'Outcomese',
  description: 'Learn more about CCFIL',
}

const quote = `It's our challenges and obstacles that give us layers of depth and make us interesting. Are they fun when they happen? No. But they are what make us unique.`
const quoteName = `ELLEN DEGENERES`
const quoteImgSrc = `https://ccfil.com/wp-content/uploads/2016/08/resident-quote.jpg`

export default function Outcomes() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col w-full">
          <QuoteSection quote={quote} quoteName={quoteName} quoteImgSrc={quoteImgSrc}/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
