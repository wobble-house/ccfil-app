import 'server-only'
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import NavHeader from "@/components/header/header"
import { codeOfEthics } from "@/lib/data/data"

export const metadata = {
  title: 'Code of Ethics',
  description: ''
}

export default function CodeOfEthics() {
  return (
   <>
   <NavHeader description={metadata.description} title={metadata.title} bgimage={0}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex mx-auto py-16 z-50 bg-white w-full justify-center mt-20">
          <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
               {codeOfEthics}
                </ReactMarkdown>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}
