"use client"
import React, { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation"
import Nav from "../navigation/nav"
import { useOnClickOutside } from '../click-handler';
import { HeaderBGCarousel } from "./header-bg-carousel";
import { bgimages, carouselSlides } from "../../lib/data/data";
import ImageHandler from "../image-handler";
import { HeaderSlidesCarousel } from "./header-slides-carousel";
import HeaderContact from "./header-contact";

export default function NavHeader({description, title, bgimage}){
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()
  function handleNavClickOutside() {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
   return(
      <div className="flex z-70 md:justify-center top-0 overflow-hidden max-w-full">
        <div className="flex absolute w-full justify-center">
          {pathname != '/' ? 
            <div className={`absolute top-0 w-full`}>
              <ImageHandler key={`${bgimages[bgimage]}-fg`} src={bgimages[bgimage].src} width={2550} height={1440} className="slideshowbg min-h-[300px] md:min-h-[550px] max-h-[550px] object-cover object-center justify-center" alt="bg image"/>
            </div> 
            : 
            <HeaderBGCarousel carouselSlides={carouselSlides} position="relative"/>}
        </div>
        <div className={`flex flex-col md:px-16 md:py-4 items-stretch bg-white bg-opacity-25 md:bg-opacity-75 w-full md:w-5/6 z-10 md:my-12 ${pathname == '/' ? 'md:min-h-[550px]' : ''}`}>
          <div className={`flex flex-row-reverse md:flex-row md:justify-between w-full`}>
            <div className={`absolute lg:hidden md:flex visible w-[34px] h-[39px] left-0 mr-5 ml-5 mt-2`}>
              <ImageHandler src="public/Logos/min-logo.svg" alt="CCFIL logo" width={34} height={39} priority/>
            </div>
            <div className={`lg:visible hidden lg:flex w-72 h-auto justify-center`}>
              <ImageHandler src="public/Logos/main-logo.svg" alt="CCFIL logo" width={225} height={58} priority/>
            </div>
            <Nav/>
          </div>
          {pathname != "/" ? 
            <div className={`flex flex-col gap-6 px-8 md:px-16 py-16 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 md:border-solid md:border-white md:border-[10px] justify-center mb-10 rounded-md ${!navbar ? "visible" : "hidden"}`}>
              <h1 className="md:text-5xl text-blue2">{title}</h1>
              <h3 className="text-blue1 md:font-black text-2xl lg:w-4/5">{description}</h3>
            </div>
          : 
            <>
              <HeaderSlidesCarousel carouselSlides={carouselSlides} navbar={navbar}/>
              <HeaderContact/>
            </>
          }

          </div>
        </div>
    )
}