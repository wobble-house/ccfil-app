import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import NavHeader from "@/components/header/header"
import { supportedEmploymentText } from "@/lib/data/data"

export const metadata = {
  title: 'Supported Employment',
  description: ''
}

export default function SupportedEmployment() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={0} />
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
        <div className="flex mx-auto pb-16 pt-32 z-50 bg-white w-full justify-center">
        <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
        {supportedEmploymentText}
                </ReactMarkdown>
        </div>
        </Suspense>
      </Animation>
   </>
  )
}
