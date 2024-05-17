'use client';
import { HeadshotHandler } from "@/utils/image-handler";
 
export default function ProfileCard(){
    return(
        <div className="relative flex flex-col bg-white/75 max-w-3xl mx-auto gap-6 p-20">
          <div className="flex flex-col">
            <HeadshotHandler src={'Marc3.jpg'} alt={'marcus placeholder img'} fallbackSrc={'oof.png'} className="object-top" />
            <button>
              update
              </button>
          </div>
          
          <h3 className="flex text-2xl">
          Hi _______, 
          </h3>
          <div className="flex flex-col">
            <p>title:</p>
              <input placeholder="this is your current title">
                </input>
            <p>bio:</p>
              <input placeholder="this is your current bio">
                </input>
            <button>
              update
              </button>
          </div>
        </div>
    )
}