'use client';
import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useOnClickOutside } from './click-handler';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Carousel, slides } from "./carousel";
import {NavLink, NavListLink, aboutList, servicesList, NavHeader } from "@/components/nav-links"

const images = [
  {id: 'image1', src:`https://ccfil.com/wp-content/uploads/2016/05/fetured.png`},
  {id: 'image2', src:`https://ccfil.com/wp-content/uploads/2016/05/slide-2.jpg`},
  {id: 'image3', src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILCampusLifeHeader-1.jpg` },
  {id: 'image4', src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILServicesHeader.jpg`},
  {id: 'image5', src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILAboutUsHeader.jpg`},
  {id: 'image6', src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILCausesHeader.jpg`},
  {id: 'image7', src: `https://ccfil.com/wp-content/uploads/2016/07/contact-ccfil.jpg`}
]

export default function Nav({metadata}) {
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false)
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()
  function handleAboutMouseover (){
    setAbout(true);
    setServices(false);
  };
  function handleServicesMouseover(){
    setAbout(false);
    setServices(true);
  };
  function handleNavClickOutside() {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
  return (
      <nav className="flex z-40 md:justify-center top-0 w-full">
        <div className="flex invisible md:visible absolute w-full overflow-hidden justify-center align-bottom h-full">
        {pathname != '/' ? <Header images={images[metadata.bgimage]}/> : <Carousel slides={slides}/>}
        </div>
        <div className="flex flex-col md:flex-row flex-grow justify-between z-10 m-14">
            <div className=" flex flex-col md:flex-row-reverse items-center justify-between md:block">
              <div className="relative z-50 md:hidden">
                <button className=" bg-white dark:bg-blue2 px-2 border-2 rounded-md border-blue1 focus:border-2 focus:animate-pulse"onClick={()=>setNavbar(!navbar)}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 border-solid text-blue1"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 border-solid border-1 text-blue1"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
                      <path strokeLinecap="round"strokeLinejoin="round"d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div ref={Navref} className={`flex grow bg-blue1 md:bg-white md:bg-opacity-75 dark:bg-blue2 md:block items-stretch ${navbar ? 'flex flex-col' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row px-10 pb-8">
              <div className={`lg:hidden flex w-9 h-9 ml-5 my-8`}>
              <Image src="/logos/min-logo.svg" alt="CCFIL logo" width={36} height={36}/>
              </div>
              <div className={`lg:visible invisible flex w-64 h-16 ml-5 my-3 justify-center`}>
              <Image src="/logos/main-logo.svg" alt="CCFIL logo" width={225} height={58}/>
              </div>
              <ul  className=" text-center flex flex-col flex-shrink md:grid md:grid-cols-6 gap-3 max-w-lg md:ml-auto pb-10 pr-10">
                <NavLink path={`/`} text={`Home`}/>
                <NavListLink items={aboutList} path={`/about`} text={`About Us`} onMouseLeave={()=>setAbout(false)} onMouseOver={handleAboutMouseover} onClick={()=>setAbout(true)} listState={about}/>
                <NavListLink items={servicesList} path={`/services`} text={`Services`} onMouseLeave={()=>setServices(false)} onMouseOver={handleServicesMouseover} onClick={()=>setServices(true)} listState={services}/>
                <NavLink path={`/outcomes`} text={`Outcomes`}/>
                <NavLink path={`/cause`} text={`Cause`}/>
                <NavLink path={`/contact`} text={`Contact Us`}/>
              </ul>
              </div>
              <NavHeader description={metadata.description} navbar={navbar} title={metadata.title}/>
          </div>
          </div>
          </nav>
          
  );
};
