import ImageHandler from "./image-handler"
import Section from "./section"
export default function QuoteSection({quote, quoteName, quoteImgSrc}:{quote:string, quoteName: string, quoteImgSrc}){
    return(
        <Section initial={true} useOnce id={null}>
        <div className="flex flex-col -z-1 overflow-hidden p-8">

        <div className="fixed top-0 left-0 md:min-w-screen w-full ">
            <ImageHandler src={quoteImgSrc} width={2560} height={1440} alt="background image of smiling people" className="min-h-screen aspect-[16/9] object-cover "/>
        </div>
                <div className="flex flex-col max-w-6xl bg-transparent mx-auto h-[500px] z-1 justify-center gap-14 -mt-14 pb-10">
                    <h4 className="text-[180px] font-bold text-white text-right rotate-180 -my-14">&quot;</h4>
        <h3 className="text-left italic font-300 text-3xl text-white">{quote}</h3>
                    <h3 className="text-left font-bold uppercase text-white">
                {quoteName}
            </h3></div>
        </div>
        </Section>
    )
}
