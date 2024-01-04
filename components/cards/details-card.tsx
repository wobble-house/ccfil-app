'use client';
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import {HeadshotHandler} from "../image-handler";

export function DetailsCard({ 
  bio,
  link,
  firstName,
  lastName,
  title,
  Image,
 }:{ 
    bio: string,
    link: any,
    firstName: string,
    lastName: string,
    Image: {
        src: string,
        alt: string
    },
    title : string,
 }){
      return (
        <div className="flex flex-col bg-white bg-opacity-75 max-h-[80vh] rounded-md border-white border-[11px]">
            <div className="overscroll-contain">
              <div className="relative flex flex-col gap-2"> 
                    <div className=" md:flex gap-8 align-middle max-w-3xl justify-end ">
                          <div className="relative md:fixed top-0 md:top-3 md:left-8 max-w-[300px] mx-auto pt-3 md:pt-9">
                            <HeadshotHandler src={Image?.src} alt={Image?.alt} fallbackSrc={'public/Images/oof.png'} isCover={false}/>
                          </div>
                        <div className="flex flex-col gap-2  md:w-1/2 md:pt-5 px-5 mb-8 ">
                          <h2 className={`text-left ${(firstName.length + lastName.length > 15) ? 'text-[1.1em] group-hover:text-[1.3em] md:text-[1.8em]': 'text-[1.3em] group-hover:text-[1.6em] md:text-[2.2em]'} whitespace-normal`}>{firstName}&nbsp;{lastName}</h2>
                            <h3 className="text-left whitespace-nowrap font-[600]">{title}</h3>
                            <hr className="border-pink border-[1.5px] w-1/2"/>
                            <div className="flex mx-auto overflow-auto h-[260px] bg-white rounded-md justify-center">
                              <ReactMarkdown className="list-inside text-left md:px-5 max-w-2xl text-sm whitespace-pre-line pb-20 md:py-5" remarkPlugins={[remarkGfm, remarkBreaks]}>
                              {bio}
                                </ReactMarkdown>
                                <div className="invisible md:visible icon-scroll w-[21px] h-[36px] before:w-[3px] before:h-[3px] before:top-[8px] before:-ml-[2px] before:rounded-[2px] border-[2px] border-blue1 ml-[22%] bottom-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-1 w-full"></div>

              {link != null ? <div className="flex mx-auto">
              <button className={` p-2 drop-shadow hover:scale-[1.01] text-white`}>
                <Link href={link} target="_blank" 
                rel="noopener noreferrer" className="">Read More</Link>
                </button> 
              </div>:<></>}

              </div>
            </div>
            </div>
    ) 
}