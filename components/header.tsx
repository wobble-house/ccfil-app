"use client"
import React, { useState, useRef } from "react";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Nav from "./nav"
import { useOnClickOutside } from './click-handler';
import { HeaderBGCarousel } from "./header-bg-carousel";
import { bgimages, carouselSlides } from "./data/data";
import ImageHandler from "./image-handler";
import { HeaderSlidesCarousel } from "./header-slides-carousel";

export function NavHeader({description, title, metadata}){
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()
  function handleNavClickOutside() {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
   return(
      <div className="flex z-40 md:justify-center top-0 w-full overflow-hidden">
        <div className="flex absolute w-full justify-center">
          {pathname != '/' ? 
            <div className={`absolute top-0`}>
              <ImageHandler key={`${bgimages[metadata.bgimage].id}-fg`} src={bgimages[metadata.bgimage].src} width={2550} height={1440} className="slideshowbg min-h-screen md:min-h-[780px] object-cover object-center justify-center" alt="bg image"/>
            </div> 
            : 
            <HeaderBGCarousel carouselSlides={carouselSlides}/>}
        </div>
        <div className={`flex flex-col md:px-16 md:pb-6 bg-white bg-opacity-25 md:bg-opacity-75 w-full z-10 md:m-12 ${pathname == '/' ? 'md:min-h-[600px]' : ''}`}>
          <div className={`flex flex-row-reverse md:flex-row md:justify-between w-full`}>
            <div className={`lg:hidden w-[34px] h-[39px] mr-5 md:ml-5 mt-4`}>
              <ImageHandler src="public/Logos/min-logo.svg" alt="CCFIL logo" width={34} height={39} priority/>
            </div>
            <div className={`lg:visible hidden lg:flex w-72 h-auto my-3 justify-center`}>
              <ImageHandler src="public/Logos/main-logo.svg" alt="CCFIL logo" width={225} height={58} priority/>
            </div>
            <Nav/>
          </div>
          {pathname != "/" ? 
            <div className={`flex flex-col gap-6 px-8 md:px-16 py-20 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 md:border-solid md:border-white md:border-[10px] justify-center mb-10 ${!navbar ? "visible" : "hidden"}`}>
              <h1 className="md:text-5xl text-blue2">{title}</h1>
              <h3 className="text-blue1 md:font-black text-2xl lg:w-4/5">{description}</h3>
            </div>
          : 
            <HeaderSlidesCarousel carouselSlides={carouselSlides} navbar={navbar}/>
          }
          {pathname != "/" ?
            ""
          :
            <div className="absolute bottom-20 w-5/6 flex flex-row justify-between pb-20 px-4 md:px-0 mx-auto bg-white md:bg-transparent bg-opacity-50">
              <div className={`flex flex-row gap-2 items-center`}>
                <ImageHandler src={'public/Icons/phone.svg'} height={24} width={24} alt='phone icon'/>
                <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest pb-1">{`(248) 410-2715`}</h3>
              </div>
              <div className="icon-scroll"></div>
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