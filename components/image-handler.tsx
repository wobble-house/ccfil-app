'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ImageHandler(props){
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <Image
            {...rest}
            src={`https://${process.env.S3_BUCKET}.s3.${process.env.REGION_CODE}.amazonaws.com/${imgSrc}`}
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
    const { src, fallbackSrc, alt, isCover, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <div className={`flex relative ${isCover == true ? 'w-[300px] h-[300px] md:w-96 md:h-96': 'mx-auto justify-center w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-md' } overflow-hidden`}>
        <Image
            {...rest}
            className='object-top'
            src={`https://${process.env.S3_BUCKET}.s3.${process.env.REGION_CODE}.amazonaws.com/public/Images/Headshots/${imgSrc}`}
            alt={alt}
            fill
            quality={50}
            style={{
                objectFit: "cover"
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            sizes="(max-width: 768px) 90vw, 33vw"
        />
        </div>
    );
};
