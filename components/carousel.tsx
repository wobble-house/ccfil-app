'use client';
import { useEffect, useState } from "react"
import Image from "next/image";

export function HeaderCarousel({carouselSlides}){
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
            <div className={`carousel top-0 flex-auto w-full overflow-hidden max-h-[600px]`}>
                {carouselSlides.map((carouselSlide, index)=>{
                    return (
                        <div key={index} className={index == current ? `carouselCard carouselCard-active`: `carouselCard`}>
                            <Image key={index} src={carouselSlide.src} width={2550} height={1440} className="invisible md:visible bg-transparent min-h-[780px] object-cover object-center justify-center" alt="bg image" priority/>
                        </div>
                    )
                })}
            </div>
    )
}