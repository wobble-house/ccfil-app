"use client"
import React, { useState, useRef } from "react";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Nav from "./nav"
import { useOnClickOutside } from './click-handler';
import { HeaderCarousel } from "./carousel";
import { bgimages, carouselSlides } from "./data/data";

export function NavHeader({description, title, metadata, headerButton}){
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()
  function handleNavClickOutside() {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
    return(
      <div className="flex z-40 md:justify-center top-0 w-full">
      <div className="flex invisible md:visible absolute w-full overflow-hidden justify-center align-bottom h-full">
      {pathname != '/' ? <div className={`absolute top-0`}>
      <Image key={`${bgimages[metadata.bgimage].id}-fg`} src={bgimages[metadata.bgimage].src} width={2550} height={1440} className="slideshowbg invisible md:visible min-h-[780px] object-cover object-center justify-center" alt="bg image"/>
    </div> : 
    <HeaderCarousel carouselSlides={carouselSlides}/>}
      </div>
<div className={`flex flex-col px-16 pb-6 gap-5 bg-white bg-opacity-75 w-full z-10 m-12 min-h-[500px]`}>
        <div className={`flex flex-row justify-between w-full`}>
          <div className={`lg:hidden flex w-9 h-9 ml-5`}>
          <Image src="/logos/min-logo.svg" alt="CCFIL logo" width={36} height={36}/>
          </div>
          <div className={`lg:visible hidden lg:flex w-72 h-20 my-3 justify-center`}>
          <Image src="/logos/main-logo.svg" alt="CCFIL logo" width={225} height={58}/>
          </div>
          <Nav/>
        </div>
        {pathname != "/" ? 
        <div className={`flex flex-col gap-6 px-16 py-20 bg-transparent border-solid border-white border-[10px] ${!navbar ? "visible" : "hidden"}`}>
          <h1 className="text-7xl font-700 text-blue2">{title}</h1>
          <h3 className="text-blue1 font-black text-2xl">{description}</h3>
          </div>
          : 
          <div className={`flex flex-col gap-6 px-16 py-20 bg-transparent border-solid border-white border-[10px] md:w-4/5 lg:w-2/3 ${!navbar ? "visible" : "hidden"}`}>
          <div className="flex flex-col gap-6">
          <h3 className="text-blue1 font-bold text-2xl">{description}</h3>
          <h1 className="text-6xl font-black text-blue2">{title}</h1>
          {headerButton ? 
          <button className="mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]">
            <Link href={headerButton.url} scroll={false}>{headerButton.title}</Link> </button>
          : ""}
          </div> 
          </div>
          }
          {pathname != "/" ? "":
          <div className="flex flex-row justify-between pt-10 invisible md:visible">
            <div className={`flex flex-row gap-2 items-center`}>
              <Image src={'/Icons/Icons/phone.svg'} height={24} width={24} alt='phone icon'/>
            <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest pb-1">{`(248) 410-2715`}</h3>
            </div>
            <p></p>
            <Link href="/contact" >
              <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest">
                  Contact Us
                  </h3>
            </Link>
          </div>}
          </div>
          </div>
    )
}