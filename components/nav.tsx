'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from './click-handler';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  `https://ccfil.com/wp-content/uploads/2016/05/fetured.png`,
  `https://ccfil.com/wp-content/uploads/2016/05/slide-2.jpg`,
  `https://ccfil.com/wp-content/uploads/2016/07/CCFILCampusLifeHeader-1.jpg`
]

export function Slideshow() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(images[count])
  const timer = setInterval(() => {
    setCount((prevCount) => (prevCount + 1) % images.length);
    setImage(images[count]);
  }, 5000);

  useEffect(() => {
    if (count > images.length - 1) {
      setCount(0);
      setImage(images[0])
      clearInterval(timer)
    } else {
      
    }
  }, [count, timer]);

  return (
    <AnimatePresence mode={'sync'} initial={false}>
      <motion.div
      layout
      initial={{ 
        opacity: 0}}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.8,
        } }}
      exit={{ opacity: 0,
        transition: {
          delay: 1,
          duration: 0.8,
        }}}>
    <Image src={image} width={1920} height={1080} className="slideshow invisible md:visible min-h-[600px] object-cover object-center justify-center" alt="bg image" priority/>
    </motion.div>
    </AnimatePresence>
  )
}



export default function Nav({metadata}) {
  const router = useRouter();
  const pathname = usePathname();
  const Navref = useRef();
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [navbar, setNavbar] = useState(false);
  

  const handleAboutMouseover = () => {
    setAbout(true);
    setServices(false);
  };

  const handleServicesMouseover = () => {
    setAbout(false);
    setServices(true);
  };

  const handleNavClickOutside = () => {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
  return (
      <nav className="flex z-40 md:justify-center top-0 mb-4 w-full">
        <div className="transition ease=in-out delay-50 duration-300 flex invisible md:visible absolute h-[600px] w-full overflow-hidden justify-center align-bottom">
        <Slideshow/>
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
            <div className="flex flex-col md:flex-row px-10">
              <div className={`lg:hidden flex w-9 h-9 ml-5 my-8`}>
              <Image src="/logos/min-logo.svg" alt="CCFIL logo" width={36} height={36}/>
              </div>
              <div className={`lg:visible invisible flex w-64 h-16 ml-5 my-3 justify-center`}>
              <Image src="/logos/main-logo.svg" alt="CCFIL logo" width={225} height={58}/>
              </div>
              <ul  className=" text-center flex flex-col flex-shrink md:grid md:grid-cols-6 gap-3 max-w-lg md:ml-auto pb-10 pr-10">
                <li className={`transition ease-in-out delay-200 pt-7 max-w-[70px] ${pathname == "/" ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <button
                  className="font-sans uppercase font-bold text-sm whitespace-nowrap text-white md:text-blue2" 
                  onClick={()=> router.push("/")}>
                    Home
                  </button>
                </li>


                <li className={`transition ease-in-out delay-200 duration-300 pt-7 max-w-[70px] ${pathname.slice(0,6) == "/about" ? "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]" : ""} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                <button
                 className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2"  
                onMouseOver={handleAboutMouseover} 
                onClick={()=> setAbout(true)} >
                  About Us
                  </button>
                  <ul onMouseLeave={()=>setAbout(false)} className={`absolute mt-4 ${about ? "bg-blue1 text-white rounded-md gap-7" : "hidden"}`}>
                  <div className="-mt-4 -mb-4 ml-2 w-0 h-0 
                    border-l-[25px] border-l-transparent
                    border-b-[35px] border-blue1
                    border-r-[25px] border-r-transparent">
                  </div>
                  <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 hover:scale-[1.03] rounded-md`}>

                  <button
                  className="transition ease-in-out delay-200 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                  onClick={()=> router.push("/about/commitment" )}
                  >
                  Our Commitment
                  </button>
                  </li>
                  <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 hover:scale-[1.03] rounded-md`}>

                  <button
                  className="transition ease-in-out delay-200 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                  onClick={()=> router.push("/about/team" )} 
                  >
                  Team
                  </button>
                  </li>
                  <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 hover:scale-[1.03] rounded-md`}>

                  <button 
                  className="transition ease-in-out delay-200 duration-300 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                  onClick={()=> router.push("/about/strategic-plan" )} 
                  >
                  Strategic Plan
                  </button>
                  </li>
                  <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2  hover:scale-[1.03] rounded-md`}>

                  <button
                  className="transition ease-in-out delay-200 duration-300 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                  onClick={()=> router.push("/about/code-of-ethics" )}
                  >
                  Code of Ethics
                  </button>
                  </li>
                 </ul>
                </li>


                <li className={`transition ease-in-out delay-200 duration-300 pt-7 max-w-[70px] ${pathname.slice(0,9) != "/services" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>

                      <button 
                      className=" uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" 
                      onMouseOver={handleServicesMouseover} 
                      onClick={()=> setServices(true)} 
                      >
                        Services
                        </button>
                  <ul onMouseLeave={()=>setServices(false)} className={`absolute mt-4 ${services ? "bg-blue1 text-white rounded-md gap-7" : "hidden"}`}>
                  <div className="-mt-4 -mb-4 ml-2 w-0 h-0 
                    border-l-[25px] border-l-transparent
                    border-b-[35px] border-blue1
                    border-r-[25px] border-r-transparent">
                  </div>
                  <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 hover:scale-[1.03] rounded-md`}>

                      <button
                      className="transition ease-in-out delay-200 duration-300 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                      onClick={()=> router.push("/services/program-components" )}
                      >
                      Program Components
                      </button>
                    </li>
                    <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 hover:scale-[1.03] rounded-md`}>

                      <button
                      className="transition ease-in-out delay-200 duration-300 block uppercase font-bold text-xs bg-blue1 text-white rounded-md hover:text-pink hover:bg-blue2 py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                      onClick={()=> router.push("/services/residential-program" )}
                      >
                      Semi-Independent Residential Programs
                      </button>
                    </li>
                    <li className={`transition ease=in-out delay-50 duration-300 bg-blue1 hover:bg-blue2 rounded-md hover:scale-[1.03]`}>
                      <button
                      className="transition ease-in-out delay-100 duration-300 block uppercase font-bold text-xs rounded-md text-white hover:text-pink py-4 px-5 whitespace-nowrap tracking-widest w-full text-left" 
                      onClick={()=> router.push("/services/supported-employment" )}
                      >
                      Supported Employment
                      </button>
                    </li>
                  </ul>
                </li>


                <li className={`transition ease-in-out delay-200 duration-300 pt-7 max-w-[70px] ${pathname != "/outcomes" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <button
                    className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" 
                    onClick={()=> router.push("/outcomes" )} 
                    >
                      Outcomes
                  </button>
                </li>

                <li className={`transition ease-in-out delay-200 duration-300 pt-7 max-w-[70px] ${pathname != "/cause" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <button 
                    className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" 
                    onClick={()=> router.push("/cause" )} 
                    >
                      Cause
                  </button>
                </li>

                <li className={`transition ease-in-out delay-200 duration-300 pt-7 max-w-[70px] ${pathname != "/contact" ? "" : "border-b-0 border-r-0 border-l-0 border-2 border-pink -mt-[2px] -mb-[2px]"} hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-2 hover:border-pink hover:-mt-[2px] hover:-mb-[2px]`}>
                  <button
                    className="font-sans uppercase text-sm whitespace-nowrap font-bold text-white md:text-blue2" 
                    onClick={()=> router.push("/contact" )} 
                    >
                      Contact Us
                  </button>
                </li>

              </ul>
              </div>
              <div className={`flex flex-col gap-6 md:3/4 lg:w-3/5 p-16 bg-transparent bg-opacity-50 border-solid border-white mx-16 mb-10 border-[10px] ${!navbar ? "visible" : "hidden"}`}>
          <h3 className="text-blue1 font-bold text-2xl">{metadata.description}</h3>
          <h1 className="text-6xl font-black text-blue2">{metadata.title}</h1>
          <button className="mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]">button</button>
          </div>
          <div className="flex flex-row justify-between px-10 invisible md:visible">
            <p>{`(248) 410-2715`}</p>
            <p>{`-->`}</p>
            <Link href="/contact" >
              <h3 className="uppercase font-[700] text-blue1 whitespace-nowrap tracking-widest">
                  Contact Us
                  </h3>
                  </Link>
          </div>
          </div>
          </div>
          </nav>
          
  );
};
