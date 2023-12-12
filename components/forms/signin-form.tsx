"use client";
import React, { useState } from 'react'
import { signIn, type SignInInput } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { Amplify, type ResourcesConfig } from 'aws-amplify';

const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
  }
};

Amplify.configure({
  Auth: authConfig
});

export default function SigninForm(){
    const router = useRouter();
    // States for contact form fields
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
        //   Handling signin
    const handleSignIn = async (e) => {
    const formData = {username: username, password: password};
      e.preventDefault();
        try {
        const { isSignedIn, nextStep } = await signIn(formData as SignInInput);
        router.push("/dashboard");
      } catch (error) {
        console.log('error signing in', error);
      }
    }
      
    return (
      <section className='bg-white p-4 rounded-lg bg-opacity-75'>
              <form
              className="">

            <div className="relative flex flex-col gap-2 py-2 ">
                <input type="text" placeholder="Username*" onChange={e => setUsername(e.target.value)} name="username" className="w-full focus:border-none focus:ring-blue1 " />
            <hr className="border-pink border-1"/>
            </div>

            <div className="flex flex-col gap-2 py-2">
                <input type="password" placeholder="Password*" onChange={e => setPassword(e.target.value)} name="password" className="" />
            <hr className="border-pink border-1"/>
            </div>

        <div className={` ${!(password || username) ? "text-center pt-10": "animate-pulse text-center pt-10"}`}>
          <button 
              className="uppercase border-2 border-blue1 rounded-full px-10 py-2 mx-auto"
              onClick={handleSignIn}>
                <h3 className="">
              Sign In
              </h3>
          </button>
        </div>  
      </form>
      </section>
    )
  }