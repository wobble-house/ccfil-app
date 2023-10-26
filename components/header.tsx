"use client"
import React, { useState, useRef } from "react";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Nav from "./nav"
import { useOnClickOutside } from './click-handler';
import { HeaderCarousel } from "./carousel";
import { bgimages, carouselSlides } from "./data/data";
import ImageHandler from "./image-handler";

export function NavHeader({description, title, metadata, headerButton}){
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()
  const router = useRouter();
  function handleNavClickOutside() {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
  function handleAnchor(e){
    e.preventDefault();
    router.push("/about/team#Leadership")
  } return(
      <div className="flex z-40 md:justify-center top-0 w-full overflow-hidden md:max-h-[700px]">
      <div className="flex flex-row absolute w-full justify-center">
      {pathname != '/' ? <div className={`absolute top-0`}>
      <ImageHandler key={`${bgimages[metadata.bgimage].id}-fg`} src={bgimages[metadata.bgimage].src} width={2550} height={1440} className="slideshowbg min-h-screen md:min-h-[780px] object-cover object-center justify-center" alt="bg image"/>
    </div> : 
    <HeaderCarousel carouselSlides={carouselSlides}/>}
      </div>
<div className={`flex flex-col md:px-16 md:pb-6 gap-5 bg-white bg-opacity-25 md:bg-opacity-75 w-full z-10 md:m-12 md:min-h-[500px]`}>
        <div className={`flex flex-row-reverse md:flex-row md:justify-between w-full`}>
          <div className={`lg:hidden flex w-9 h-auto mr-5 md:ml-5 mt-4`}>
          <ImageHandler src="public/Logos/min-logo.svg" alt="CCFIL logo" width={34} height={39} priority/>
          </div>
          <div className={`lg:visible hidden lg:flex w-72 h-auto my-3 justify-center`}>
          <ImageHandler src="public/Logos/main-logo.svg" alt="CCFIL logo" width={225} height={58} priority/>
          </div>
          <Nav/>
        </div>
        {pathname != "/" ? 
        <div className={`flex flex-col gap-6 px-8 md:px-16 py-20 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 md:border-solid md:border-white md:border-[10px] justify-center ${!navbar ? "visible" : "hidden"}`}>
          <h1 className="md:text-5xl text-blue2">{title}</h1>
          <h3 className="text-blue1 md:font-black text-2xl lg:w-4/5">{description}</h3>
          </div>
          : 
          <div className={`flex flex-col gap-6 px-8 md:px-16 py-20 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 border-solid border-white border-[10px] justify-center ${!navbar ? "visible" : "hidden"}`}>
          <div className="flex flex-col gap-6">
          <h3 className="text-blue1 md:font-black text-2xl lg:w-4/5">{description}</h3>
          <h1 className="md:text-6xl text-blue2 text-center md:text-left">{title}</h1>
          {headerButton != null ? 
          <button className="md:mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]" onClick={handleAnchor}>
            {headerButton.title}
            </button>
          : "" }
          </div> 
          </div>
          }
          {pathname != "/" ? "":
          <div className="flex flex-row justify-between py-3 mb-8 md:py-10 px-4 md:px-0 bg-white md:bg-transparent bg-opacity-50">
            <div className={`flex flex-row gap-2 items-center`}>
              <ImageHandler src={'public/Icons/phone.svg'} height={24} width={24} alt='phone icon'/>
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