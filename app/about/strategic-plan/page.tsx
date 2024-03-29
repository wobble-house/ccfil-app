import 'server-only'
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import NavHeader from "@/components/header/header"
import ImageHandler from "@/utils/image-handler"

export const metadata = {
  title: "Strategic Plan",
  description: "Learn More about CCFIL",
}

export default function StrategicPlan() {
  return (
   <>
   <NavHeader description={metadata.description} title={metadata.title} bgimage={1} />
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex flex-col mx-auto justify-center items-center pb-10 pt-32 bg-gray1 w-full gap-10 z-50">
          <ImageHandler src="public/Images/Strategic_Plan-2023-2025-1024x768.png" width={1024} height={768} alt="strategic plan"/>
          <button className="text-center bg-blue1 hover:bg-white hover:bg-opacity-75 text-white font-bold hover:text-blue1 hover:border-solid hover:border-[2px] rounded-full px-10 py-3 m-3 hover:mb-[9px]">
            DOWNLOAD PDF COPY
          </button>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
