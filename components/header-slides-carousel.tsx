'use client';
import { useEffect, useState } from "react"
import ImageHandler from "./image-handler";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function HeaderSlidesCarousel({carouselSlides, navbar}){
    const [current, setCurrent] = useState(0);
    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=> {
            nextSlide();
        }, 5000);
    });
const nextSlide = () => {
    setCurrent(current === carouselSlides.length - 1 ? 0 : current + 1)
}
function handleAnchor (e, url) {
    e.preventDefault();
    router.push(url)
}
    return (
            <div className={`carousel w-full`}>
                {carouselSlides.map((carouselSlide, index)=>{
                    return (
                        <div key={index} className={index == current ? `w-3/4 lg:w-5/6 carouselCard carouselCard-active`: `w-3/4 lg:w-5/6 carouselCard`}>
                            <div className={`flex flex-col gap-6 px-8 md:px-16 py-20 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 md:border-solid md:border-white md:border-[10px] justify-center w-full ${!navbar ? "visible" : "hidden"}`}>
                                    <h3 className="text-blue1 md:font-black text-2xl">{carouselSlide.description}</h3>
                                    <h1 className="md:text-6xl text-blue2 text-center md:text-left">{carouselSlide.title}</h1>
                                        <button className="md:mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]" onClick={(e)=>handleAnchor(e, carouselSlides[current].headerButton.url)}>
                                            {carouselSlide.headerButton.title}
                                        </button>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}