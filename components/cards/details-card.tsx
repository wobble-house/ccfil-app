'use client';
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import {HeadshotHandler} from "../../utils/image-handler";

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
        <div className="flex flex-col md:flex-row bg-white rounded-md max-h-[95vh] border-blue2 border-[11px]">
            <div className="overscroll-y-contain overflow-auto">
              <div className="flex flex-col"> 
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-evenly align-middle max-w-3xl pt-3 md:pt-5 md:pb-5">
                          <div className="relative flex w-[300px] h-[300px] top-0 md:top-3 mx-auto shadow-md hover:scale-[1.02] active:scale-100 transition-all ease-in-out overflow-hidden">
                            <HeadshotHandler src={Image?.src} alt={Image?.alt} fallbackSrc={'oof.png'} className="object-top"/>
                          </div>
                        <div className="flex flex-col gap-2 md:w-1/2 px-5">
                            <h2 className={`text-left ${(lastName.length > 10) ? 'text-[1.6em] md:text-[1.8em]': 'text-[1.9em] md:text-[2.2em]'} whitespace-normal`}>{firstName}&nbsp;{lastName}</h2>
                            <h3 className="text-left whitespace-nowrap font-[600]">{title}</h3>
                            <hr className="border-pink border-[1.5px] w-1/2"/>
                            <div className="flex h-full gap-2 mx-auto rounded-md pt-3">

                              <ReactMarkdown className="list-inside text-left max-w-2xl text-sm rounded-xl pb-4" remarkPlugins={[remarkGfm, remarkBreaks]}>
                              {bio}
                                </ReactMarkdown>
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