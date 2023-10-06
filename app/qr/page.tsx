import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import Nav from "@/components/nav"
import {QR} from "./qr"

export const metadata = {
  title: 'QR Scanner',
  description: 'Learn more about CCFIL',
}

export default function QRPage() {
  return (
   <>
      <Nav metadata={metadata}/>
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