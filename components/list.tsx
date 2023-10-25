'use client';
import ImageHandler from "./image-handler";
import { useState, useRef } from "react";
import { DetailsCard } from "./details-card";
import { useOnClickOutside } from "./click-handler";

export function InfoCardList({data}){
  const infoData = data.filter(function (data) {return data.isFeatured === false})
  
  return(
          <ul className="p-10 grid grid-cols-0 md:grid-cols-2 gap-8 mx-auto text-center place-content-center z-30 relative"
            >
                {infoData.map(data => (<InfoCard 
                  id={`${data.id} card`}
                  key={data.id}
                  bio={data.bio}
                  link={data.link != null ? data.link : null}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  profileImage={data.profileImage}
                  title={data.title}
                />
              ))}
          </ul>
  )
}

export function FeaturedCardList({data}){
  const featuredData = data.filter(function (data) {return data.isFeatured === true})
  
  return(
          <ul className="relative flex flex-col md:grid md:grid-cols-2 gap-8 mx-auto text-center place-content-center z-60"
            >
              {featuredData.map(data => (
                  <InfoCard 
                  id={data.id}
                  key={data.id}
                  bio={data.bio}
                  link={data.link != null ? data.link : null}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  profileImage={data.profileImage}
                  title={data.title}
                />
              ))}
          </ul>
  )
}

export function InfoCard({ 
  id,
  bio,
  link,
  firstName,
  lastName,
  profileImage,
  title
 }:{ 
  id,
    bio: string,
    link: any,
    firstName: string,
    lastName: string,
    profileImage: {
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
    className={`fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-blue2 bg-opacity-75 z-50 p-5 overscroll-none`}
    >
      <div className={`flex transform details-card justify-center items-center mx-auto ${isModalOpen ? "animate-slideUpEnter":"animate-slideUpLeave"}`}>
                  <div
                  className="flex flex-col transform duration-300 ease-in-out "
                  >
                    <button className="justify-self-end relative -mb-4 -mr-4 hover:scale-105 bg-pink rounded-full pb-1 mx-auto" onClick={!isModalOpen ? close : open }>
      <span className="text-xl hover:animate-pulse m-3 text-white">x</span>
      </button>
                  <div ref={ref} className="overflow-y-scroll no-scrollbar">
                  <DetailsCard
                    bio={bio}
                    link={link}
                    firstName={firstName}
                    lastName={lastName}
                    profileImage={profileImage}
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
    className={`transform ease-in-out delay-200 duration-300 flex flex-col hover:scale-105 relative grow shrink z-40`}
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
                  <ImageHandler src={profileImage.src} alt={profileImage.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024} priority className="object-cover" />
                </div>

                </div>
              </button>
              </li>
                )
              }
