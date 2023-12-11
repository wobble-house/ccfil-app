'use client';
import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
export default function SignOutButton(){
    const router = useRouter();
    async function handleSignOut() {
      try {
        await signOut();
        router.refresh();
      } catch (error) {
        console.log('error signing out: ', error);
      }
      
    }
    return(
      <button className="relative z-90 bg-white px-2 border-2 rounded-md focus:animate-pulse mr-auto ml-5 mt-4" onClick={handleSignOut}>
                    <div style={{cursor: "pointer"}} className={``}><h2 className="text-sm font-thin uppercase">Sign Out</h2></div>
            </button>
    )}