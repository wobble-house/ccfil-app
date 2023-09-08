'use client';
import Link from 'next/link';
import React, { useState, useRef } from "react";
import { useOnClickOutside } from './click-handler';
import ImageHandler from './image-handler';
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
      <nav className="flex z-10 justify-center top-0 ">
        <div className="absolute h-[600px] w-full overflow-hidden justify-center align-bottom">
        <Image src="https://ccfil.com/wp-content/uploads/2016/05/fetured.png" width={1920} height={1080} className="invisible md:visible z-0 min-h-[600px] object-cover object-center justify-center" alt="bg image"/>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-10 pt-10 mx-auto z-10 max-w-6xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row-reverse items-center justify-between md:block">

              <div className="z-30 md:hidden mr-auto relative">
                <button
                  className="bg-white dark:bg-black pr-2 mr-2 pl-2 mt-5
                 border-2 rounded-md border-black focus:border-2 focus:animate-pulse"
                 onClick={()=>setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 border-solid border-1
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
                      className="w-6 h-6 border-solid border-1
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
          </div>
            <div ref={Navref} className={`flex flex-col md:flex-row mx-auto bg-transparent bg-white bg-opacity-50 pb-10 pl-16 pr-16 dark:bg-black md:block ${navbar ? 'sticky' : 'hidden'}`}>
            <div className="flex flex-row p-5 content-center">
              <div className={`flex w-9 h-9`}>
              <ImageHandler src="/logos/min-logo.svg" alt="CCFIL logo" width={36} height={36}></ImageHandler>
              </div>
              <ul  className="text-center flex flex-col flex-shrink md:grid md:grid-cols-6 gap-3 max-w-lg ml-auto pb-10">
                <li className={`max-w-[70px] ${selectedLink == "/" ? "border-b-0 border-r-0 border-l-0 border-2 border-red-500" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>
                  <Link href="/" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=> setNavbar(false)} onMouseDown={()=>setSelectedLink("/")}>
                    Home
                  </Link>
                </li>


                <li className={`max-w-[70px] ${selectedLink.slice(0,6) == "/about" ? "border-b-0 border-r-0 border-l-0 border-2 border-red-500" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                <Link href="/about"  className="font-sans uppercase text-xs whitespace-nowrap"  onMouseOver={()=> setAbout(true)} onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about")} >
                  About Us
                  </Link>
                  <ul onMouseLeave={() => setAbout(false)} className={`${about ? "absolute bg-[#2852ab] text-white p-3 rounded-lg gap-3" : "hidden"}`}>
                  <li className={`max-w-[70px] ${selectedLink != "/about/commitment" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/about/commitment" className="block font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/commitment")}>
                  Our Commitment
                  </Link>
                  </li>
                  <li className={`max-w-[70px] ${selectedLink != "/about/team" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/about/team" className="block font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/team")}>
                  Team
                  </Link>
                  </li>
                  <li className={`max-w-[70px] ${selectedLink != "/about/strategic-plan" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/about/strategic-plan" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/strategic-plan")}>
                  Strategic Plan
                  </Link>
                  </li>
                  <li className={`max-w-[70px] ${selectedLink != "/about/code-of-ethics" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/about/code-of-ethics" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/about/code-of-ethics")}>
                  Code of Ethics
                  </Link>
                  </li>
                 </ul>
                </li>


                <li className={`max-w-[70px] ${selectedLink.slice(0,9) != "/services" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                <Link href="/services"  onMouseOver={()=> setServices(true)} className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services")}>
                  Services
                  </Link>
                  <ul onMouseLeave={() => setServices(false)} className={`${services ? "absolute bg-[#2852ab] text-white p-3 rounded-lg gap-3" : "hidden"}`}>
                  <li className={`max-w-[70px] ${selectedLink != "/services/program-components" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/services/program-components" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services/program-components")}>
                  Program Components
                  </Link>
                </li>
                <li className={`max-w-[70px] ${selectedLink != "/services/residential-program" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/services/residential-program" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services/residential-program")}>
                  Semi-Independent Residential Programs
                  </Link>
                </li>
                <li className={`max-w-[70px] ${selectedLink != "/services/supported-employment" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/services/supported-employment" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/services")}>
                  Supported Employment
                  </Link>
                </li>
                  </ul>
                </li>


                <li className={`max-w-[70px] ${selectedLink != "/outcomes" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/outcomes" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/outcomes")}>
                  Outcomes
                  </Link>
                </li>
                <li className={`max-w-[70px] ${selectedLink != "/cause" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/cause" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/cause")}>
                  Cause
                  </Link>
                </li>
                <li className={`max-w-[70px] ${selectedLink != "/contact" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-red-500"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-red-500`}>

                  <Link href="/contact" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)} onMouseDown={()=>setSelectedLink("/contact")}>
                  Contact Us
                  </Link>
                </li>
                {children}
              </ul>
              </div>
              <div className="p-16 bg-transparent bg-opacity-50 border-solid border-white border-[10px]">
              <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
          </div>
          <div className="flex flex-row justify-between pt-10">
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
