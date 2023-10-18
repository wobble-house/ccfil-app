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
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
        <div className="flex mx-auto py-16 z-50 bg-white w-full justify-center">
        <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
               {metadata.title}
                </ReactMarkdown>
                </div>
        </Suspense>
      </Animation>
   </>
  )
}
