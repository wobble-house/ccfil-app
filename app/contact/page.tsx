import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { NavHeader } from "@/components/header"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export const metadata = {
  title: 'Contact Us',
  description: '',
  bgimage: 6
}

export default function Contact() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
        <div className="flex flex-row mx-auto py-16 z-50 bg-white w-full justify-center">
        
        </div>
        </Suspense>
      </Animation>
   </>
  )
}
