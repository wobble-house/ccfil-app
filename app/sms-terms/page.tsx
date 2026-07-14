import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Loading from "@/app/loading"
import NavHeader from "@/components/header/header"
import { smsTermsText } from '@/lib/data/data'
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export const metadata = {
  title: 'SMS Terms & Conditions',
  description: ``
}
export default async function PrivacyPolicy() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} bgimage={3} />
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="flex mx-auto pt-40 pb-20 z-50 bg-white w-full justify-center">
            <ReactMarkdown className="prose prose-slate max-w-4xl text-left p-2" remarkPlugins={[remarkGfm, remarkBreaks]} >
              {smsTermsText}
            </ReactMarkdown>
          </div>
        </Suspense>
      </Animation>
   </>
  )
}