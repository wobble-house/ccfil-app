'use client';
import ImageHandler from "./image-handler";
import { useState, useRef } from "react";
import { DetailsCard } from "./details-card";
import { useOnClickOutside } from "./click-handler";

export function InfoCardList({data}){

  return(
          <ul className="relative flex flex-col md:grid md:grid-cols-2 gap-8 mx-auto text-center place-content-center z-60"
            >
                {data.map(data => (<TeamCard 
                  id={`${data.id} card`}
                  key={data.id}
                  bio={data.bio}
                  link={data.link != null ? data.link : null}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  Image={data.Image}
                  title={data.title}
                />
              ))}
          </ul>
  )
}

export function TeamCard({ 
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
    className={`fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-blue2 bg-opacity-75 z-50 overscroll-contain px-7 pt-10`}
    >
      <div className={`flex transform details-card justify-center items-center overscroll-contain mx-auto ${isModalOpen ? "animate-slideUpEnter":"animate-slideUpLeave"}`}>
        <div className="flex flex-col transform duration-300 ease-in-out ">
          <button className="justify-self-end relative -mb-4 -mr-4 hover:scale-105 bg-pink rounded-full pb-1 mx-auto" onClick={!isModalOpen ? close : open }>
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
    className={`transform ease-in-out delay-200 duration-300 flex flex-col hover:scale-105 relative grow shrink z-40 px-8 md:px-0`}
    >
                <button 
                className={`save-button group transform ease-in-out duration-300 modal open`}
                onClick={!isModalOpen ? open : close }>
                    <div className="flex flex-col justify-end w-full shadow-2xl mx-auto transform duration-100 ease-in-out group-hover:shadow-4xl">
                    <div className="absolute px-4 py-2 z-30 w-full bg-blue1 bg-opacity-80 group-hover:bg-opacity-100 align-middle">
                        <h2 className="relative text-center transform duration-300 delay-100 ease-in-out font-[500] text-white text-[1.3em] group-hover:text-[1.6em]">{firstName}&nbsp;{lastName}</h2>
                        <h3 className="relative text-center transform duration-300 delay-150 ease-in-out uppercase text-white text-[0.8em] group-hover:text-[0.9em]">{title}</h3>
                     </div>
                <div className="flex relative">

                  <ImageHandler src={Image.src} alt={Image.alt} fallbackSrc={'public/Images/oof.png'} height={768} width={1024} className="object-cover" />
                </div>
                </div>
              </button>
              </li>
                )
              }
