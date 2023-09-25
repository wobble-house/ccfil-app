"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  {id: 'image1', src:`https://ccfil.com/wp-content/uploads/2016/05/fetured.png`},
  {id: 'image2', src:`https://ccfil.com/wp-content/uploads/2016/05/slide-2.jpg`},
  {id: 'image3', src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILCampusLifeHeader-1.jpg` },
  {id: 'image4', src:`https://ccfil.com/wp-content/uploads/2016/07/CCFILServicesHeader.jpg`},
]

export function Slideshow() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(images[count])
  const [nextImage, setNextImage] = useState(images[count+1])
  const resetTimer = setInterval(reset, 60000)
  const timer = setInterval(() => {
    {count > images.length - 1? resetTimer : setCount(count + 1)}
  }, 9000);
  function reset (){
    timer
    setCount(0)
    setImage(images[3])
    setNextImage(images[1])
    clearTimeout(resetTimer)
  }
  useEffect(() => {

    if (count > images.length - 1) {
      clearInterval(timer)
      setCount(0)
      setImage(images[0])
      setNextImage(images[0])
      timer
    } 
    {count > images.length - 1? setImage(images[0]) : setImage(images[count])}
    {count > images.length - 1 ? setNextImage(images[0]) : setNextImage(images[count+1]) }
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