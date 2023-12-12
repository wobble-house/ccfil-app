'use client';
import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
export default function ProfileButton(){
    const router = useRouter();
    return(
      <button className="relative z-90 bg-white px-2 border-2 rounded-md focus:animate-pulse mr-auto ml-5 mt-4" onClick={()=>router.push("/profile")}>
                    <div style={{cursor: "pointer"}} className={``}><h2 className="text-sm font-thin uppercase">Profile</h2></div>
            </button>
    )}