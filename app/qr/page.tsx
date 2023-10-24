import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import {QR} from "../../components/qr"
import { NavHeader } from "@/components/header"

export const metadata = {
  title: 'QR Scanner',
  description: 'QR Learn more about CCFIL',
  bgimage: 1
}

export default function QRPage() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto max-w-screen">
          <h2 className="text-2xl font-bold uppercase">{metadata.title}</h2>
          <QR/>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
