'use client';
import ImageHandler from "./image-handler";
import { useRouter } from "next/navigation";
import Section from "./section";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ccfilicon from "\public\Icons\Icons\compassion-icon-2.svg"
import Image from "next/image";
import { AccordionItem } from "./accordion-item";

export default function InfoSegment({headerText, bodyText, Type, infoImage, ButtonUrl}:{headerText : string, bodyText: string, Type: string, infoImage, ButtonUrl}){
    const router = useRouter();
    return(
        <Section initial={false} useOnce>
        <div className={`relative z-40 h-full bg-white py-12 mx-auto `}>
            <div className={`max-w-6xl flex flex-col mx-auto w-full h-full ${Type != "B" ? "md:flex-row " : "md:flex-row-reverse"}`}>
            <div className={`md:w-1/2 ${Type != "B" ? "ml-5" : "mr-5"}`}>
            <ImageHandler src={infoImage.url} width={800} height={600} alt={infoImage.alt}/>
            </div>
            <div className={`flex flex-col gap-7 border-[10px] border-gray1 bg-transparent px-20 py-10 md:w-1/2 ${Type != "B" ? "-ml-16 mr-10" : "-mr-16 ml-10 z-10"} mt-20`}>
            <Image src={`/Icons/Icons/compassion-icon-2.svg`} alt="icon" width="60" height="60"/>
            <h2 className="text-2xl text-blue2">{headerText}</h2>
            <hr className="border-pink border-2 md:w-1/3"/>
            <ReactMarkdown className="markdown p-2 list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
            {bodyText}
            </ReactMarkdown>
            {ButtonUrl == null ? <></> : <button className="uppercase border-2 border-blue-500 rounded-full px-6 py-2 mx-auto hover:bg-blue-500 hover:text-white"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </div>
        </Section>
    )
}

export function StickyInfoSegment({bgcolor, children, captionText, type}){
    return(
        <section>
        <div className={`w-full bg-${bgcolor}`}>
        <div className={`flex flex-col ${type == "A" ? "md:flex-row" : "md:flex-row-reverse"} max-w-6xl py-16 px-3 gap-10 mx-auto justify-center bg-${bgcolor}`}>
            <div className="flex items-center md:w-1/3 border-[10px] border-blue2 p-10 sticky top-4 mb-auto max-w-[300px] aspect-[1/1]">
                <h2 className="text-blue1 font-black text-4xl flex flex-shrink relative ">
                    {captionText}
                </h2>
            </div>
            <div className="static md:w-2/3">
                {children}
            </div>
        </div>
        </div>
        </section>
    )
}

export function InfoBody({headerText, bodyText,ImageUrl,ButtonUrl }:{headerText: string, bodyText: string, ImageUrl, ButtonUrl}){
    const router = useRouter();
    return(
        <>
            <div className="flex flex-col gap-7 bg-white">
            <ImageHandler src={ImageUrl} width={800} height={600}/>
            <div className="flex flex-col gap-7 p-5">
            <h2 className="text-2xl font-bold text-blue1">{headerText}</h2>
            <hr className="border-pink border-2 w-1/2"/>
            <ReactMarkdown className="markdown p-2 list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {bodyText}
                </ReactMarkdown>
            {ButtonUrl == null ? <></> : <button className="uppercase border-2 border-blue1 rounded-full px-6 py-2 mx-auto hover:bg-blue1 hover:text-white"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </>
    )
}

export function InfoAccordionBody({headerText, items, ImageUrl,ButtonUrl }:{headerText: string, items, ImageUrl, ButtonUrl}){
    const router = useRouter();
    return(
        <>
            <div className="flex flex-col gap-7 bg-white">
                <ImageHandler src={ImageUrl} width={800} height={600}/>
                    <div className="flex flex-col gap-7 p-5">
                        <h2 className="text-2xl font-bold text-blue1">{headerText}</h2>
                        <hr className="border-pink border-2 w-1/2"/>
                    <div className={`flex flex-col gap-3`}>
                {items.map(item => (
                    <AccordionItem key={item.id} accordionTitle={item.accordionTitle} accordionBodyText={item.accordionBodyText} icon={item.icon}/>
                ))}
            </div>
            {ButtonUrl == null ? <></> : <button className="transition ease-in-out duration-75 uppercase border-2 border-blue1 rounded-full px-6 py-2 mx-auto hover:bg-blue1 hover:text-white"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </>
    )
}