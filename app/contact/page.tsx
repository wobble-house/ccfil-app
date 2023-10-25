import "server-only"
import { Animation } from '@/utils/animation/animation'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { NavHeader } from "@/components/header"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"

export const metadata = {
  title: 'Contact Us',
  description: '',
  bgimage: 6
}

export const mailingAddress = `We only provide our Mailing Address to respect our residents’ privacy. If you would like to take a tour of our property, please send us a message.

Community Connections for Independent Living
13335 15 Mile Road, Suite 244
Sterling Heights, MI 48312`
export default function Contact() {
  return (
   <>
      <NavHeader description={metadata.description} title={metadata.title} metadata={metadata} headerButton={null}/>
         <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <div className="mx-auto py-16 z-50 bg-white w-full">
        <div className="md:grid md:grid-cols-2 mx-auto justify-between max-w-6xl px-3 gap-20">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col border-solid border-[11px] border-gray1 p-12 gap-4">
              <h2>Mailing Address</h2>
              <hr className="border-pink border-2 md:w-1/3"/>
              <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
                  {mailingAddress}
                </ReactMarkdown>
            </div>
            <div className="flex flex-col border-solid border-[11px] border-gray1 p-12 gap-4">
              <h2>Phone</h2>
              <hr className="border-pink border-2 md:w-1/3"/>
              <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
                 (248)410-2715
                </ReactMarkdown>
                <button 
              className="uppercase border-2 border-blue1 rounded-full px-10 py-2 text-left mr-auto"
              >
                <Link href='tel:12484102715'><h3 className="">
              Call Us
              </h3></Link>
                
          </button>
            </div>
            <div className="flex flex-col border-solid border-[11px] border-gray1 p-12 gap-4">
              <h2>Fax</h2>
              <hr className="border-pink border-2 md:w-1/3"/>
              <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
                  (586)884-0695
                </ReactMarkdown>
            </div>

          </div>
          <div className="flex flex-col border-solid border-[11px] border-gray1 p-12 gap-4 mb-auto">
              <h2>Have a question?</h2>
              <hr className="border-pink border-2 md:w-1/3"/>
              <ReactMarkdown className="markdown p-2 list-inside text-left max-w-4xl" remarkPlugins={[remarkGfm, remarkBreaks]}>
              Send us a message! We’d love to hear from you.
                </ReactMarkdown>
                <ContactForm/>
            </div>
        </div>
        </div>
        </Suspense>
      </Animation>
   </>
  )
}
