import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
  title: 'Home',
  description: 'Learn more about CCFIL',
}

export default function Home() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <h2>CCFIL</h2>
        </Suspense>
      </Animation>
   </>
  )
}
