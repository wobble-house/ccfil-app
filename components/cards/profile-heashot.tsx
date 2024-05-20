'use client';
import { ThumbnailHandler } from '../../utils/image-handler';
import HeadshotUpload from '../../components/forms/HeadshotUpload'
import { useState } from 'react';

export default function ProfileHeadshot({user, src, alt}:{user, src: string, alt: string}){
    const [headshot, setHeadshot] = useState(false)

    const handleClick = async () => {
      setHeadshot(true)
    }

    if (headshot) return (
      <HeadshotUpload user={user}/>
    )

    else return (
      <div className="flex flex-col">
      <ThumbnailHandler src={src} alt={alt} fallbackSrc={'oof.png'} className="object-top"/>
      <button onClick={handleClick}>
        update
        </button>
    </div>
    )
}