'use client';
import React, { useState, useRef } from "react";
import {NavLink, NavListLink} from "@/components/nav-links"
import { aboutList, servicesList } from "./data/data";

export default function Nav() {
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false)
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  function handleAboutMouseover (){
    setAbout(true);
    setServices(false);
  };
  function handleServicesMouseover(){
    setAbout(false);
    setServices(true);
  };
  function handleMainNavButton(){
    (navbar == false ? setNavbar(true): setNavbar(false))
  }
  return (
      <nav className="flex z-90 md:justify-center top-0 w-full md:w-auto">
        <div className="flex flex-col-reverse md:flex-row flex-grow justify-end">
                <button className="fixed z-99 md:hidden bg-white px-2 border-2 rounded-md border-blue1 focus:border-2 focus:animate-pulse mr-auto ml-5 mt-4" onMouseDown={handleMainNavButton}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 border-solid text-blue2"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 border-solid border-1 text-blue2"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
                      <path strokeLinecap="round"strokeLinejoin="round"d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
            <div ref={Navref} className={`relative flex mx-auto md:mx-0 bg-blue1 dark:bg-blue2 md:bg-transparent md:block  ${navbar ? 'fixed z-90 top-0 flex flex-col flex-grow min-h-content items-center w-full justify-center py-32' : 'hidden'}`}>
              <ul  className="text-center flex flex-col md:grid md:grid-cols-6 md:gap-3 md:pr-10">
                <NavLink path={`/`} text={`Home`}/>
                <NavListLink items={aboutList} path={`/about`} text={`About`} onMouseLeave={()=>setAbout(false)} onMouseOver={handleAboutMouseover} onClick={()=>setAbout(true)} listState={about}/>
                <NavListLink items={servicesList} path={`/services`} text={`Services`} onMouseLeave={()=>setServices(false)} onMouseOver={handleServicesMouseover} onClick={()=>setServices(true)} listState={services}/>
                <NavLink path={`/outcomes`} text={`Outcomes`}/>
                <NavLink path={`/cause`} text={`Cause`}/>
                <NavLink path={`/contact`} text={`Contact Us`}/>
              </ul>
          </div>
          </div>
          </nav>
          
  );
};
