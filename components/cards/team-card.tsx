'use client';
import {HeadshotHandler} from "../../utils/image-handler";
import { useState, useRef } from "react";
import { DetailsCard } from "./details-card";
import { useOnClickOutside } from "../../utils/click-handler";
export default function TeamCard({ 
    id,
    bio,
    link,
    firstName,
    lastName,
    Image,
    title
   }:{ 
    id,
      bio: string,
      link: any,
      firstName: string,
      lastName: string,
      Image: {
          src: string,
          alt: string
      },
      title: string
   }){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(ref, () => setModalOpen(false));
   if (isModalOpen) return (
    <li
      id={id}
      key={`${id} modal open`} 
      className={`fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-blue2 bg-opacity-75 z-99 overflow-auto overscroll-contain`}
      >
        <div className={`flex transform justify-center items-center overscroll-contain px-3 pt-3 ${isModalOpen ? "animate-slideUpEnter":"animate-slideUpLeave"}`}>
          <div className="flex flex-col transform duration-300 ease-in-out p-2">
            <button className="absolute justify-self-end right-0 top-0 hover:scale-105 bg-pink rounded-full pb-1 mx-auto" onClick={!isModalOpen ? close : open }>
              <span className="text-xl hover:animate-pulse m-3 text-white">x</span>
            </button>
            <div ref={ref} className="">
              <DetailsCard
                bio={bio}
                link={link}
                firstName={firstName}
                lastName={lastName}
                Image={Image}
                title={title} />
            </div>
          </div>
        </div>
      </li>
                  )
  else return (
    <li
      key={`${id} modal closed`}
      id={id}
      className={`transform ease-in-out delay-200 duration-300 flex flex-col hover:scale-105 shrink z-40`}
      >
                  <button 
                  className={`teamMember-modal group transform ease-in-out duration-300 modal open`}
                  onClick={!isModalOpen ? open : close }>
                      <div className="flex flex-col justify-end shadow-2xl mx-auto transform duration-100 ease-in-out group-hover:shadow-4xl">
                      <div className="absolute lg:px-4 py-2 w-full z-30 bg-blue1 bg-opacity-80 group-hover:bg-opacity-100 align-middle">
                          <h2 className={`relative text-center transform duration-300 delay-100 ease-in-out font-[500] text-white ${(firstName.length + lastName.length > 10) ? 'text-[0.95em] group-hover:text-[1.0em]': 'text-[1.3em] group-hover:text-[1.6em]'}`}>{firstName}&nbsp;{lastName}</h2>
                          <h4 className="relative text-center transform duration-300 delay-150 ease-in-out uppercase text-white text-[0.8em] group-hover:text-[0.9em]">{title}</h4>
                       </div>
                  <div className="flex relative overflow-hidden">
                    <HeadshotHandler src={Image.src} alt={Image.alt} fallbackSrc={'oof.png'} className="object-top" />
                  </div>
                  </div>
                </button>
                </li>
                  )
                }