'use client';
import ImageHandler from "./image-handler";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { DetailsCard } from "./details-card";
import { animationList, dropIn, animationItem } from "@/utils/animation/animation";
import { useOnClickOutside } from "./click-handler";

export function InfoCardList({data}){
  const infoData = data.filter(function (data) {return data.isFeatured === false})
  
  return(
          <motion.ul
            layout
            initial="hidden"
            whileInView="visible"
            variants={animationList}
            viewport={{ once: false }}
            className="grid grid-cols-0 md:grid-cols-2 gap-8 mx-auto text-center place-content-center z-30 relative"
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
          </motion.ul>
  )
}

export function FeaturedCardList({data}){
  const featuredData = data.filter(function (data) {return data.isFeatured === true})
  
  return(
          <motion.ul
            layout
            initial="hidden"
            whileInView="visible"
            variants={animationList}
            viewport={{ once: false }}
            className="flex flex-col md:grid md:grid-cols-2 gap-8 mx-auto text-center place-content-center z-30"
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
          </motion.ul>
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
<motion.li
    layout
    id={id}
    key={`${id} modal open`} 
    initial="hidden"
    animate="visible"
    variants={dropIn}
    className="fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-black bg-opacity-75 z-50 p-5"
    >
      <div className="flex details-card justify-center items-center mx-auto">
                  <motion.div
                  layout
                  className="flex flex-col"
                  variants={animationItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                    <button className="justify-self-end relative -mb-4 -mr-4 hover:scale-105 bg-blue-500 rounded-full pb-1 mx-auto">
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
                </motion.div>
                </div>
                </motion.li>
                )
else return (
  <motion.li
    layout
    key={`${id} modal closed`}
    variants={animationItem}
    id={id}
    className="flex flex-col hover:scale-105 relative grow shrink"
    >
                <motion.button 
                initial="visible"
                animate="hidden"
                exit="exit"
                layout
                whileTap={{scale: 0.95}}
                whileHover={{scale: 1.05}}
                className="save-button"
                onClick={!isModalOpen ? open : close }>
                    <div className="flex flex-col justify-end w-full shadow-2xl mx-auto">
                    <div className="absolute px-4 pb-2 z-30 w-full">
                        <h2 className="flex lg:text-2xl uppercase font-bold text-left text-white">{firstName}&nbsp;{lastName}</h2>
                        <h3 className="lg:text-xl uppercase italic text-left text-white">{title}</h3>
                     </div>
                <div className="flex bg-zinc-50 relative">
                  <ImageHandler src={profileImage.src} alt={profileImage.alt} fallbackSrc={'/images/oof.png'} height={768} width={1024} priority className="object-cover" />
                </div>

                </div>
              </motion.button>
              </motion.li>
                )
              }
