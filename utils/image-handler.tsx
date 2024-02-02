'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ImageHandler(props){
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <Image
            {...rest}
            src={`${process.env.S3_BUCKET_URL}/${imgSrc}`}
            alt={alt}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            style={{
                objectFit: "cover"
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export function HeadshotHandler(props){
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <div className={`flex relative overflow-hidden w-[300px] h-[450px] mx-auto justify-center rounded-md`}>
        <Image
            {...rest}
            src={`${process.env.IMAGES_URL}/public/Images/Headshots/${imgSrc}`}
            alt={alt}
            fill
            style={{
                objectFit: "cover"
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
        </div>
    );
};
