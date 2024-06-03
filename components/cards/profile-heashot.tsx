'use client';
import { ThumbnailHandler } from '../../utils/image-handler';
import HeadshotUpload from '../../components/forms/HeadshotUpload'
import { useState } from 'react';

export default function ProfileHeadshot({user, src, alt}:{user, src: string, alt: string}){
return (
      <div className="flex flex-col">
      <ThumbnailHandler src={src} alt={alt} fallbackSrc={'oof.png'} className="object-top"/>
      </div>
    )
}