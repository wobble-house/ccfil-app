import Image from "next/image"
import Section from "./section"
export default function QuoteSection({quote, quoteName, quoteImgSrc}:{quote:string, quoteName: string, quoteImgSrc}){
    return(
        <Section initial={true} useOnce>
        <div className="flex flex-col -z-1 overflow-hidden">

        <div className="fixed top-0 left-0 md:min-w-screen w-full ">
            <Image src={quoteImgSrc} width={2560} height={1440} alt="background image of smiling people" className="min-h-screen aspect-[16/9] object-cover "/>
        </div>
                <div className="flex flex-col max-w-3xl bg-transparent mx-auto h-[400px] z-1 justify-center gap-14">
        <h2 className="text-left italic font-thin text-4xl text-white">{quote}</h2>
                    <h3 className="text-left font-bold uppercase text-white">
                {quoteName}
            </h3></div>
        </div>
        </Section>
    )
}
