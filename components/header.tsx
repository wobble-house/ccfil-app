"use client"
import Image from "next/image"

export function Header({images}) {
  return (
    <>

          <div
      
      className={`absolute top-0`}
>
    <Image key={`${images.id}-fg`} src={images.src} width={2550} height={1440} className="slideshowbg invisible md:visible min-h-[600px] object-cover object-center justify-center" alt="bg image"/>
    </div> 
    </>
  )
}