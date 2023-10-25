'use client';
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ImageHandler from "./image-handler";

export function DetailsCard({ 
  bio,
  link,
  firstName,
  lastName,
  title,
  profileImage,
 }:{ 
    bio: string,
    link: any,
    firstName: string,
    lastName: string,
    profileImage: {
        src: string,
        alt: string
    },
    title : string,
 }){

      return (
        <div className="flex flex-col shrink py-4 px-6 bg-blue2 overflow-auto max-h-[400px] no-scrollbar rounded-md ">
            <div>
              <div className="flex flex-col gap-2"> 
                    <div className="flex flex-col md:flex-row grow shrink gap-8 align-middle max-w-3xl">
                          <div className="m-3 max-w-[300px] mx-auto">
                            <ImageHandler src={profileImage.src} alt={profileImage.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024}/>
                          </div>
                        <div className="flex flex-col gap-1">
                          <h2 className="text-white text-left md:text-4xl">{firstName}&nbsp;{lastName}</h2>
                          
                            <h3 className="text-left text-white whitespace-nowrap font-[600] ">{title}</h3>
                            <div className="mx-auto overflow-auto">
                              <ReactMarkdown className="list-inside text-left max-w-2xl text-white text-sm whitespace-normal" remarkPlugins={[remarkGfm, remarkBreaks]}>
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