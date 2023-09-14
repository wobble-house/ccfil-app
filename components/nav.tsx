'use client';
import Link from 'next/link';
import React, { useState, useRef } from "react";
import { useOnClickOutside } from './click-handler';
import Image from 'next/image';

export default function Nav({children}) {
  const Navref = useRef();
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleNavClickOutside = () => {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
  return (
      <nav className="flex z-40 md:justify-center top-0 mb-4 w-full">
        <div className="flex invisible md:visible absolute h-[600px] w-full overflow-hidden justify-center align-bottom">
        <Image src="https://ccfil.com/wp-content/uploads/2016/05/fetured.png" width={1920} height={1080} className="invisible md:visible z-0 min-h-[600px] object-cover object-center justify-center" alt="bg image" priority/>
        </div>
        <div className="flex flex-col md:flex-row flex-grow justify-between z-10 max-w-6xl mx-10 mt-10">
            <div className=" flex flex-col md:flex-row-reverse items-center justify-between md:block">

              <div className="relative z-50 md:hidden">
                <button
                  className=" bg-white dark:bg-blue2 px-2
                 border-2 rounded-md border-blue1 focus:border-2 focus:animate-pulse"
                 onClick={()=>setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 border-solid text-blue1 
                      "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 border-solid border-1 text-blue1
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div ref={Navref} className={`flex grow bg-blue1 md:bg-white md:bg-opacity-50 dark:bg-blue2 md:block items-stretch ${navbar ? 'flex flex-col' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row p-10">
              <div className={`flex w-9 h-9 ml-5`}>
              <Image src="/logos/min-logo.svg" alt="CCFIL logo" width={36} height={36}/>
              </div>
              <ul  className=" text-center flex flex-col flex-shrink md:grid md:grid-cols-6 gap-3 max-w-lg md:ml-auto pb-10 pr-10">
                <li className={`max-w-[70px] ${selectedLink == "/" ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <Link href="/" className="font-sans uppercase font-bold text-sm whitespace-nowrap text-white md:text-blue2" onClick={()=> setNavbar(false)} onMouseDown={()=>setSelectedLink("/")}>
                    Home
                  </Link>
                </li>


                <li className={`max-w-[70px] ${selectedLink.slice(0,6) == "/about" ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                <Link href="/about"  className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2"  onMouseOver={()=>setAbout(true)} onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about")} >
                  About Us
                  </Link>
                  <ul onMouseLeave={()=>setAbout(false)} className={`absolute ${about ? "bg-blue1 text-white p-3 rounded-lg gap-3" : "hidden"}`}>
                  <li className={``}>

                  <Link href="/about/commitment" className="block font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/commitment")}>
                  Our Commitment
                  </Link>
                  </li>
                  <li className={``}>

                  <Link href="/about/team" className="block font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/team")}>
                  Team
                  </Link>
                  </li>
                  <li className={``}>

                  <Link href="/about/strategic-plan" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/strategic-plan")}>
                  Strategic Plan
                  </Link>
                  </li>
                  <li className={` `}>

                  <Link href="/about/code-of-ethics" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/code-of-ethics")}>
                  Code of Ethics
                  </Link>
                  </li>
                 </ul>
                </li>


                <li className={`max-w-[70px] ${selectedLink.slice(0,9) != "/services" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                      <Link 
                      href="/services"  
                      className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" 
                      onMouseOver={()=>setServices(true)} 
                      onClick={()=>setNavbar(false)} 
                      onMouseDown={()=>setSelectedLink("/services")}>
                        Services
                        </Link>
                  <ul onMouseLeave={()=>setServices(false)} className={`absolute ${services ? "bg-blue1 text-white p-5 rounded-lg gap-7" : "hidden"}`}>
                  <li className={``}>

                  <Link href="/services/program-components" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services/program-components")}>
                  Program Components
                  </Link>
                </li>
                <li className={``}>

                  <Link href="/services/residential-program" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services/residential-program")}>
                  Semi-Independent Residential Programs
                  </Link>
                </li>
                <li className={` `}>

                  <Link href="/services/supported-employment" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services")}>
                  Supported Employment
                  </Link>
                </li>
                  </ul>
                </li>


                <li className={`max-w-[70px] ${selectedLink != "/outcomes" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                  <Link href="/outcomes" className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/outcomes")}>
                  Outcomes
                  </Link>
                </li>
                <li className={`max-w-[70px] ${selectedLink != "/cause" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                  <Link href="/cause" className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/cause")}>
                  Cause
                  </Link>
                </li>
                <li className={`max-w-[70px] ${selectedLink != "/contact" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                  <Link href="/contact" className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/contact")}>
                  Contact Us
                  </Link>
                </li>
                {children}
              </ul>
              </div>
              <div className={`flex flex-col gap-6 md:3/4 lg:w-3/5 p-16 bg-transparent bg-opacity-50 border-solid border-white mx-16 mb-10 border-[10px] ${!navbar ? "visible" : "hidden"}`}>
          <h3 className="text-blue1 font-bold text-2xl">small text</h3>
          <h1 className="text-6xl font-black text-blue2">Big Text</h1>
          <button className="mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]">button</button>
          </div>
          <div className="flex flex-row justify-between px-10 invisible md:visible">
            <p>{`(248) 410-2715`}</p>
            <p>{`-->`}</p>
            <Link href="/contact" className="font-sans uppercase text-xs whitespace-nowrap">
                  Contact Us
                  </Link>
          </div>
          </div>
          </div>
          </nav>
          
  );
};
