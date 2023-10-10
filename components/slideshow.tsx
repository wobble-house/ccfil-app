"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function SlideshowHeader({images}) {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(images[count])
  const [nextImage, setNextImage] = useState(images[count+1])
  const timer = setInterval(()=> setCount(count + 1)
  , 5000);

  function reset (){
    clearInterval(timer)
    setCount(0)
    setImage(images[count])
    setNextImage(images[count + 1])
    timer
  }

  useEffect(() => {
    if (count > images.length - 1) { 
      setTimeout(reset, 7000)
    }
    else {
      setImage(images[count])
      setNextImage(images[count + 1])
    }
  }, [count]);

  return (
    <>

          <div
      
      className={`absolute top-0 bg-transparent`}
>
    <Image key={`${image.id}-fg`} src={image.src} width={1920} height={1080} className="slideshowbg invisible md:visible min-h-[600px] object-cover object-center justify-center" alt="bg image"/>
    </div> 
    {nextImage ? 
    <div
      
      className={`absolute top-0 bg-transparent`}
>
  <Image key={`${nextImage.id}-next`} src={nextImage?.src} width={1920} height={1080} className="slideshow invisible md:visible min-h-[600px] object-cover object-center justify-center bg-transparent" alt="bg image"/>
    </div> : <div
      
      className={`absolute top-0 bg-transparent`}
>
    <Image key={`${images[0].id}-bg`} src={images[0].src} width={1920} height={1080} className="slideshow invisible md:visible min-h-[600px] object-cover object-center justify-center bg-transparent" alt="bg image"/>
    </div> }
    </>
  )
}

export function Header({images}) {
  return (
    <>

          <div
      
      className={`absolute top-0 bg-transparent`}
>
    <Image key={`${images.id}-fg`} src={images.src} width={1920} height={1080} className="slideshowbg invisible md:visible min-h-[600px] object-cover object-center justify-center" alt="bg image"/>
    </div> 
    </>
  )
}