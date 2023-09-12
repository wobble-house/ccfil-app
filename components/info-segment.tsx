'use client';
import ImageHandler from "./image-handler";
import { useRouter } from "next/navigation";

export default function InfoSegment({headerText, bodyText, Type, ImageUrl, ButtonUrl}:{headerText : string, bodyText: string, Type: string, ImageUrl, ButtonUrl}){
    const router = useRouter();
    return(
        <div className={`z-20 h-full bg-white pb-10 mx-auto `}>
            <div className={`max-w-6xl flex flex-col mx-auto w-full h-full ${Type != "B" ? "md:flex-row " : "md:flex-row-reverse"}`}>
            <div className={`w-1/2 ${Type != "B" ? "ml-5" : "mr-5"}`}>
            <ImageHandler src={ImageUrl} width={800} height={600}/>
            </div>
            <div className={`flex flex-col gap-7 border-[10px] border-grey-200 bg-transparent px-20 py-10 w-1/2 ${Type != "B" ? "-ml-16 mr-10" : "-mr-16 ml-10 z-10"} mt-20`}>
            <p>icon</p>
            <h2 className="text-2xl font-bold text-blue-700">{headerText}</h2>
            <hr className="border-red-500 border-2 w-1/2"/>
            <p>{bodyText}</p>
            {ButtonUrl == null ? <></> : <button className="uppercase border-2 border-blue-500 rounded-full px-6 py-2 mx-auto hover:bg-blue-500 hover:text-white"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </div>
    )
}

export function StickyInfoSegment({children, captionText}){
    return(
        <>
        <div className="w-full bg-[#f5f5f5]">
        <div className="flex flex-col md:flex-row max-w-6xl py-16 px-3 gap-10 mx-auto">
            <div className="w-1/3 border-[10px] border-blue-500 p-10 sticky top-4 mb-auto">
                <h2 className="text-blue-700 font-black text-5xl">
                    {captionText}
                </h2>
            </div>
            <div className="w-2/3">
                {children}
            </div>
        </div>
        </div>
        </>
    )
}

export function InfoBody({headerText, bodyText,ImageUrl,ButtonUrl }:{headerText: string, bodyText: string, ImageUrl, ButtonUrl}){
    const router = useRouter();
    return(
        <>
            <div className="flex flex-col gap-7 bg-white">
            <ImageHandler src={ImageUrl} width={800} height={600}/>
            <div className="flex flex-col gap-7 p-5">
            <h2 className="text-2xl font-bold text-blue-700">{headerText}</h2>
            <hr className="border-red-500 border-2 w-1/2"/>
            <p>{bodyText}</p>
            {ButtonUrl == null ? <></> : <button className="uppercase border-2 border-blue-500 rounded-full px-6 py-2 mx-auto hover:bg-blue-500 hover:text-white"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </>
    )
}