import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ImageHandler from "@/components/image-handler";

const whoWeAre = `
Community Connections for Independent Living, LLC is a group of caring professionals dedicated to the residents we service, individuals who sustained Traumatic Brain Injury (TBI). 
\\
We realize that each of our residents has a unique journey to recovery ahead of them. Therefore, we develop an individualized rehabilitation plan that ensures they learn the skills and tools they need to successfully navigate school, work and daily life. Ultimately our role is to be supportive and help our residents reach their goals and move forward with their rehabilitation.
`
export default function Footer(){
    return (
    <>
            <div className="relative bottom-0 overflow-hidden py-16 bg-white">

                <div className="absolute w-full bottom-0">
                <ImageHandler src="https://ccfil.com/wp-content/themes/ccfil/img/footer-bg.png" width={2560} height={1440} alt={`footer image`}/>
            </div>
            <div className={`max-w-6xl sticky my-2 bottom-0 bg-gray3 p-16 mx-auto`}>
                <div className="flex flex-col md:flex-row justify-between text-white max-w-6xl mx-auto gap-10">
                <div className="flex flex-col content-center max-w-md gap-5">
                    <h2 className="text-2xl text-white">
                    Who We Are
                    </h2>
                    <hr>
                    </hr>
                    <ReactMarkdown className="markdown p-2 list-inside text-left text-white" remarkPlugins={[remarkGfm, remarkBreaks]}>
               {whoWeAre}
                </ReactMarkdown>
                </div>
                <div className="flex flex-col md:ml-auto content-center gap-5 justify-center items-center">
                <div className="mx-auto">
                    image goes here
                </div>
                <hr></hr>
                <div className="w-40">
                    <p className="text-white">
                    Mailing Address
13335 15 Mile Rd., Ste. 244
Sterling Heights, MI 48312
                    </p>
                </div>
                <div className="w-40">
                    <p className="text-white">
                    {`P(248) 410-2715`}
                    </p>
                    <p className="text-white">
                    {`F(586) 573-6397`}
                    </p>
                </div>
                <button className="bg-blue1 px-10 py-3 rounded-full uppercase mx-auto hover:text-blue1 hover:bg-transparent font-bold hover:border-solid hover:border-blue1 hover:border-4 hover:-mb-[8px] hover:-mr-[8px]">contact us</button>
                </div>
                </div>
                <p className="text-center font-mono text-xs text-white pt-20">©Copyright 2023 Community Connections. All Rights Reserved. Privacy Policy</p>
            </div>
            
        </div>
    </>
    )
}