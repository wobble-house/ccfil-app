"use client";
import { signIn, signUp, confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';
import { Amplify, type ResourcesConfig } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { generateClient } from "aws-amplify/api";
import { createTeamMember } from "../../utils/graphql/mutations";

const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
  }
};

Amplify.configure({
  Auth: authConfig
});

export default function SignupForm(){
  const ref = useRef(null);
  const router = useRouter();
  // States for form fields
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(email);
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isLeader, setIsLeader] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [newUserId, setNewUserId] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signupFormData = {username: email, password: password, options: { userAttributes: { email: email, phone_number: phone }, autoSignIn: true}};
  const signinFormData = {username: newUserId, password: password};
  const client = generateClient();
      //   Handling signup
  const handleSignUp = async (e) => {
    e.preventDefault();

      try {
      const { isSignUpComplete, userId, nextStep } = await signUp(signupFormData)
      setNewUserId(userId)
      setNextStep(JSON.stringify(nextStep.signUpStep))
      console.log(JSON.stringify(nextStep.signUpStep))
       }
      catch (error) {
        console.log('error signing up:', error);
      }
    }
    const handleConfirmSignup = async (event) => {
        event.preventDefault();
        const confirmSignUpInput: ConfirmSignUpInput = {
          username: newUserId,
          confirmationCode: confirmationCode
        };
        const { isSignUpComplete } = await confirmSignUp(confirmSignUpInput);
        setIsSignUpComplete(isSignUpComplete)
        if (isSignUpComplete){
            const { isSignedIn, nextStep } = await signIn(signinFormData);
            setNextStep(JSON.stringify(nextStep.signInStep))
            setIsSignedIn(isSignedIn)
            if (isSignedIn) {
              let modelFields = {
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                link: link,
                title: title,
                isFeatured: isFeatured,
                isLeader: isLeader,
                userId: newUserId,
              };
              try {
                await client.graphql({
                  query: createTeamMember,
                  variables: {
                    input: {
                      ...modelFields,
                    },
                  },
                });
                console.log("Team Member Created")
                router.push("/profile")
              } catch (err) {
                console.error(err);
              } 
            }
            else return <p>Something went wrong signing in</p>;}
          else return <p>Something went wrong completing signup</p>;}
        useEffect(() => {
          if (nextStep === "CONFIRM_SIGN_UP") 
          return (ref.current)
        }, [nextStep]);
        console.log(nextStep, newUserId, {"is signup complete?" : isSignUpComplete}, {"Are you Signed In?" : isSignedIn})
 return (
  (newUserId != "") ? 
      <section ref={ref} className='bg-white p-4 rounded-lg bg-opacity-75'><form
            className={`${isSignUpComplete ? "invisible": "visible"}`}>
          <div className="relative flex flex-col gap-2 py-2 ">
              <input type="text" placeholder="Confirmation Code*" onChange={e => setConfirmationCode(e.target.value)} name="confirmationCode" className="w-full focus:border-none focus:ring-blue1 " />
          <hr className="border-pink border-1"/>
          </div>
      <div className={` ${!(confirmationCode) ? "text-center pt-10": "animate-pulse text-center pt-10"}`}>
        <button 
            className="uppercase border-2 border-blue1 rounded-full px-10 py-2 mx-auto"
            onClick={handleConfirmSignup}>
              <h3 className="">
            Confirm Sign Up
            </h3>
        </button>
      </div>
    </form>
    </section> : 
    <section ref={ref} className='bg-white p-4 rounded-lg bg-opacity-75'>
      <form className={`${newUserId != "" ? "invisible": "visible"}`}>
          <div className="relative flex flex-col gap-2 py-2 ">
              <input type="text" placeholder="First Name*" onChange={e => setFirstName(e.target.value)} name="firstName" className="w-full focus:border-none focus:ring-blue1 " />
          <hr className="border-pink border-1"/>
          </div>

          <div className="relative flex flex-col gap-2 py-2 ">
              <input type="text" placeholder="Last Name*" onChange={e => setLastName(e.target.value)} name="LastName" className="w-full focus:border-none focus:ring-blue1 " />
          <hr className="border-pink border-1"/>
          </div>

          <div className="relative flex flex-col gap-2 py-2 ">
              <input type="email" placeholder="Email*" onChange={e => setEmail(e.target.value)} name="email" className="w-full focus:border-none focus:ring-blue1 " />
          <hr className="border-pink border-1"/>
          </div>

          <div className="flex flex-col gap-2 py-2">
              <input type="password" placeholder="Password*" onChange={e => setPassword(e.target.value)} name="password" className="" />
          <hr className="border-pink border-1"/>
          </div>

      <div className={` ${!(password || username) ? "text-center pt-10": "animate-pulse text-center pt-10"}`}>
        <button 
            className="uppercase border-2 border-blue1 rounded-full px-10 py-2 mx-auto"
            onClick={handleSignUp}>
              <h3 className="">
            Sign Up
            </h3>
        </button>
      </div>  
    </form>
    </section>
  )
}
