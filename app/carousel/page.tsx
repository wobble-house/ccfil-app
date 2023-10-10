import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import Nav from "@/components/nav"
import { Carousel, slides } from "@/components/carousel"

export const metadata = {
  title: 'Carousel',
  description: '',
  bgimage: 6
}

export default function CarouselPage() {
  return (
   <>
      <Nav metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen">
          <h2 className="text-2xl font-bold uppercase">{metadata.title}</h2>
            <Carousel slides={slides}/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
