'use client';
import { useEffect, useState } from "react"
import Image from "next/image";

export const slides = [
    {src:`https://ccfil.com/wp-content/uploads/2016/05/fetured.png`, title: 'Like Family', description: `We treat residents how we'd like to be treated.`, buttonText:`Learn More`, buttonLink:`/about`},
    {src:`https://ccfil.com/wp-content/uploads/2016/05/slide-2.jpg`, title: `It's our only standard.`, description: `Success isn't just a goal`, buttonText:`Learn How`, buttonLink:`/services`},
    {src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILCampusLifeHeader-1.jpg` , title: `It's our commitment.`, description: 'Community is extremely important to us.', buttonText:`Learn Why`, buttonLink:`/about/commitment`}
  ]

export function Carousel({slides}){
    const [current, setCurrent] = useState(0);

useEffect(()=> {
    setTimeout(()=> {
        nextSlide();
    }, 5000);
});
const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
}
    return (
            <div className={`carousel top-0 flex-auto w-full`}>
            {slides.map((slide, index)=>{
                return (
                    <div key={index} className={index == current ? `carouselCard carouselCard-active`: `carouselCard`}>
  <Image key={index} src={slide.src} width={2550} height={1440} className="invisible md:visible bg-transparent min-h-[600px] object-cover object-center justify-center" alt="bg image"/>
                    </div>
                )
            })}
            </div>
    )
}