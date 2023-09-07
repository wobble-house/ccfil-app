import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"

export const metadata = {
  title: 'Code of Ethics',
  description: 'Learn more about CCFIL',
}

export default function CodeOfEthics() {
  return (
   <>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen mt-10">
          <h2 className="text-2xl font-bold uppercase">{metadata.title}</h2>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
