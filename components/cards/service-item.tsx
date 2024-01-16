'use client';
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import ImageHandler from "../../utils/image-handler"

export function ServiceItem({serviceTitle, serviceBodyText, Icon}){
    const [open, setOpen] = useState(false)
    const handleClick = () => {open ? setOpen(false):setOpen(true)}
    return(
        <div className={`relative flex flex-col transition ease-in-out duration-100 w-full border-4 border-gray1`} >
            <div className={`relative flex flex-row justify-between px-5 py-2 items-top gap-3`}>
                <div className="relative flex flex-row gap-4">
                    <div className="relative flex w-10 h-10 justify-center">
                    <ImageHandler src={Icon.src} alt={Icon.alt} fill/>
                    </div>
                    <h2 className={`text-lg font-normal uppercase text-gray2`}>{serviceTitle}</h2>
                    </div>
                <button className={`relative flex my-auto transition ease-in-out duration-300 text-4xl text-blue2 font-medium h-[10px] w-[25px] ${open ? 'rotate-180':''}`} onClick={handleClick}>
                   <ImageHandler src={'public/Icons/arrow-down.svg'} fill alt="dropdown arrow"/>
                </button>
                </div>
            {open ? <div className={`transition ease-in-out delay-500 duration-100 flex px-5 pb-5`}>
            <ReactMarkdown className="markdown p-2 list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
                    {serviceBodyText}
                </ReactMarkdown>
            </div>:<></>}
        </div>
    )
}