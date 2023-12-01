'use client'
import { useState } from "react";
import AuthForm from "./sign-in-form";
import SigninForm from "./sign-in-form";

export default function SignInButton({}) {
  const [openSigninButton, setOpenSigninButton] = useState(false);
  function handleSigninModal(){
    (openSigninButton == false ? setOpenSigninButton(true): setOpenSigninButton(false))
  }
return (
    <>
        <div className="relative flex flex-row flex-grow flex-shrink gap-4">
        <button className="relative z-90 bg-white px-2 border-2 rounded-md focus:animate-pulse mr-auto ml-5 mt-4" onMouseDown={handleSigninModal}>
                  {openSigninButton ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 border-solid text-blue2"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <div style={{cursor: "pointer"}} className={``}><h2 className="text-sm font-thin uppercase">Sign In</h2></div>
                  )}
          </button>
          {openSigninButton == true ? <SigninForm/> : ""}
      </div>
    </>
  )
}