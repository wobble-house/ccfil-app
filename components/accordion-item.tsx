import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import ImageHandler from "./image-handler"

export function AccordionItem({accordionTitle, accordionBodyText, icon}){
    const [open, setOpen] = useState(false)
    const handleClick = () => {open ? setOpen(false):setOpen(true)}
    return(
        <div className={`flex flex-col transition ease-in-out duration-100 w-full border-4 border-gray1`} >
            <div className={`flex flex-row justify-between px-5 py-2 items-top gap-3`}>
                <div className="flex flex-row gap-4">
                    <ImageHandler src={icon} alt={`programfeatures icon`} height={40} width={40}/>
                    <h2 className={`text-lg font-normal uppercase text-gray2`}>{accordionTitle}</h2>
                    </div>
                <button className={`transition ease-in-out duration-300 text-4xl text-blue2 font-medium ${open ? 'rotate-180':''}`} onClick={handleClick}>
                   <ImageHandler src={'public/Icons/arrow-down.svg'} height={10} width={25} alt="dropdown arrow"/>
                </button>
                </div>
            {open ? <div className={`transition ease-in-out delay-500 duration-100 flex px-5 pb-5`}>
            <ReactMarkdown className="markdown p-2 list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
                    {accordionBodyText}
                </ReactMarkdown>
            </div>:<></>}
        </div>
    )
}