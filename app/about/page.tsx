import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import NavHeader from "@/components/header/header"

export const metadata = {
  title: 'About Us',
  description: 'Learn more about CCFIL'
}

export default function About() {
  return (
   <>
   <NavHeader description={metadata.description} title={metadata.title} bgimage={1}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen">
          <h2 className="text-2xl font-bold uppercase">{metadata.title}</h2>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
