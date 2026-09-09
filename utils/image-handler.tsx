'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import config from '../amplify_outputs.json';

const s3BucketUrl = `https://${config.storage.bucket_name}.s3.${config.storage.aws_region}.amazonaws.com`;

export default function ImageHandler(props){
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <Image
            {...rest}
            src={`${s3BucketUrl}/${imgSrc}`}
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
    const { src, fallbackSrc, alt, width, height, ...rest } = props;
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

export function ThumbnailHandler(props){
    const { src, fallbackSrc, alt, width, height, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <div className={`flex relative overflow-hidden w-[137px] h-[206px] mx-auto justify-center rounded-md`}>
        <Image
            {...rest}
            src={`${process.env.IMAGES_URL}/public/Images/Headshots/${imgSrc}`}
            alt={alt}
            width={137}
            height={206}
            style={{
                objectFit: "cover"
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 25vw"
        />
        </div>
    );
};