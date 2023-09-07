'use client';
import Link from 'next/link';
import React, { useState, useRef } from "react";
import { useOnClickOutside } from './click-handler';
import ImageHandler from './image-handler';

export default function Nav({children}) {
  const Navref = useRef();
  const AboutRef = useRef();
  const ServicesRef = useRef();
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleNavClickOutside = () => {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
  return (
      <nav className="flex z-50 px-5  bg-inherit top-0">
        <div className="flex flex-col md:flex-row justify-between w-full">

          <div className="flex flex-row justify-between">
          <div className={`w-5 h-5 mx-auto`}>
              <ImageHandler src="/logos/min-logo.svg" alt="CCFIL logo" width={20} height={20}></ImageHandler>
              </div>
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
            <div ref={Navref} className={`z-20 mx-auto bg-white dark:bg-black justify-center md:block ${navbar ? 'sticky' : 'hidden'}`}>
              <ul  className="text-center flex flex-col flex-shrink md:grid md:grid-cols-6 gap-3 max-w-lg">
                <li className="max-w-[70px]">
                  <Link href="/" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Home
                  </Link>
                </li>


                <li className="max-w-[70px]">
                <Link href="/about"  className="font-sans uppercase text-xs whitespace-nowrap"  onMouseOver={()=> setAbout(true)} onClick={()=>setNavbar(false)} >
                  About Us
                  </Link>
                  <ul onMouseLeave={() => setAbout(false)} className={`${about ? "absolute bg-[#2852ab] text-white p-3 rounded-lg gap-3" : "hidden"}`}>
                    <li>
                  <Link href="/about/commitment" className="block font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Our Commitment
                  </Link>
                  </li>
                  <li className="">
                  <Link href="/about/team" className="block font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Team
                  </Link>
                  </li>
                  <li className="">
                  <Link href="/about/strategic-plan" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Strategic Plan
                  </Link>
                  </li>
                  <li className="">
                  <Link href="/about/code-of-ethics" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Code of Ethics
                  </Link>
                  </li>
                 </ul>
                </li>


                <li className="max-w-[70px]">
                <Link href="/services"  onMouseOver={()=> setServices(true)} className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Services
                  </Link>
                  <ul onMouseLeave={() => setServices(false)} className={`${services ? "absolute bg-[#2852ab] text-white p-3 rounded-lg gap-3" : "hidden"}`}>
                  <li>
                  <Link href="/services/program-components" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Program Components
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential-program" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Semi-Independent Residential Programs
                  </Link>
                </li>
                <li>
                  <Link href="/services/supported-employment" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Supported Employment
                  </Link>
                </li>
                  </ul>
                </li>


                <li className="max-w-[70px]">
                  <Link href="/outcomes" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Outcomes
                  </Link>
                </li>
                <li className="max-w-[70px]">
                  <Link href="/cause" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Cause
                  </Link>
                </li>
                <li className="max-w-[70px]">
                  <Link href="/contact" className="font-sans uppercase text-xs whitespace-nowrap" onClick={()=>setNavbar(false)}>
                  Contact Us
                  </Link>
                </li>
                {children}
              </ul>
          </div>
          </div>
          </nav>
          
  );
};
