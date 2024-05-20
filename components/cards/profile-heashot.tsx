'use client';
import { ThumbnailHandler } from '../../utils/image-handler';
import { uploadData } from 'aws-amplify/storage';

export default function ProfileHeadshot({src, alt}:{src: string, alt: string}){
    const uploadDataInBrowser = async (event) => {
        if (event?.target?.files) {
          const file = event.target.files[0];
          uploadData({
            key: file.name,
            data: file
          });
        }
      };
    return (
        <div className="flex flex-col">
        <ThumbnailHandler src={src} alt={alt} fallbackSrc={'oof.png'} className="object-top"/>
        <form>
        <input type="file" accept="image/*" />
        <button onSubmit={uploadDataInBrowser}>
          update
          </button>
          </form>
      </div>
    )
}