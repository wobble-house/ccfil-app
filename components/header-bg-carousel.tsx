'use client';
import { useEffect, useState } from "react"
import ImageHandler from "./image-handler";

export function HeaderBGCarousel({carouselSlides}){
    const [current, setCurrent] = useState(0);

useEffect(()=> {
    setTimeout(()=> {
        nextSlide();
    }, 5000);
});
const nextSlide = () => {
    setCurrent(current === carouselSlides.length - 1 ? 0 : current + 1)
}
    return (
            <div className={` carousel top-0 flex-auto w-full overflow-hidden`}>
                {carouselSlides.map((carouselSlide, index)=>{
                    return (
                        <div key={index} className={index == current ? `carouselCard carouselCard-active overflow-hidden`: `carouselCard`}>
                            <ImageHandler key={index} src={carouselSlide.src} width={2550} height={1440} className="bg-white min-h-screen md:min-h-[640px] object-cover object-center justify-center hidden md:flex" alt="bg image" priority/>
                        </div>
                    )
                })}
            </div>
    )
}