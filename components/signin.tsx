'use client'
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {currentSession, handleSignIn, handleSignOut, handleSignUp,} from "@/utils/auth-helpers"

export default function SignInButton({}) {
  const [user, setUser] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Submit");
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const ref = useRef()
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;
    if (username.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (password.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };
  const handleCloseModals = () => {
    setSigninModal(false);
    setSignupModal(false);
  }
  const submitSignup = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
     setButtonText("Signing Up");
     handleSignUp({username: username, password: password, email:email, phone_number:phone_number, name: username,
      given_name: "change me",
      family_name: "change me",
      middle_name: "change me",
      preferred_username: "change me",
      profile: "change me",
      picture: "change me",
      website: "https://www.ccfil.com",
      gender: "change me",
      birthdate: JSON.stringify(Date.now()).substring(0, 10),
      locale: "change me",
      address: "change me",
      updated_at: JSON.stringify(Date.now())});
      try {
      setShowFailureMessage(false);
      setButtonText("Success!");
      ()=>handleCloseModals}
      catch (error) {
        console.log(error);
        setShowFailureMessage(true);
        setButtonText("Oops! There was an issue..");
        return;
      };
    }
  };
  const submitSignin = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
     setButtonText("Signing In");
     handleSignIn({username: username, password: password});
      try {
      setShowFailureMessage(false);
      setButtonText("Success!");
      ()=>handleCloseModals}
      catch (error) {
        console.log(error);
        setShowFailureMessage(true);
        setButtonText("Oops! There was an issue..");
        return;
      };
    }
  }

  const handleSigninModal = () => {
    setSigninModal(true);
    setSignupModal(false);
  }
  const handleSignupModal = () => {
   setSignupModal(true);
    setSigninModal(false);
  }
  if (user == true) return (
    <>
      <div className='bg-white flex flex-row gap-5'>
        <h1>Hello!</h1>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </>
  ); 
  else return (
    <>
    <div className='relative bg-white flex flex-row gap-5 max-w-xl mx-auto justify-center'>
        <div className="relative flex flex-row flex-grow flex-shrink gap-4 justify-center items-start mx-auto">
          <div className="relative text-right w-64" style={{cursor: "pointer"}} onClick={handleSignupModal}>
          {signupModal == true ? 
          <div className={`${signinModal == true ? "fixed": ""}`}>
          <h2 className={``}>Sign Up</h2>
            <form onSubmit={submitSignup} className={`relative flex flex-col bg-blue1 p-4 gap-2`}>
              <input type="text" placeholder="Username*" value={username} onChange={(e) => setUsername(e.target.value)} name="username"/>
              <input type="text" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} name="email"/>    
              <input type="tel" placeholder="Phone Number*" value={phone_number} onChange={e => setPhone_number(e.target.value)} name="phone_number"/>
              <input type="password" placeholder="Password*" value={password}onChange={e => setPassword(e.target.value)} name="password"/>
              <button className="bg-pink w-full text-white" type="submit" >{buttonText}</button>
              { showFailureMessage === true ? (<div className=""><div className="">Error! Please try again. If you continue to encounter problems, please contact <Link href="mailto:marca@ccfil.com">marca@ccfil.com</Link></div></div>):"" }
            </form> </div>: <div className={``}><h2>Sign Up</h2></div>}
          </div>
          <p className={``}>or</p>
          <div className="relative flex-grow flex-shrink w-64" style={{cursor: "pointer"}} onClick={handleSigninModal}>
            {signinModal == true ? 
                      <div className={`${signupModal == true ? "fixed": ""}`}>
                      <h2>Sign In</h2>
              <form onSubmit={submitSignin} className={`relative flex flex-col bg-blue1 p-4 gap-2`}>
                <input type="text" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} name="email"/>
                <input type="password" placeholder="Password*" value={password}onChange={e => setPassword(e.target.value)} name="password"/>
                <button className="bg-pink w-full text-white" type="submit" >{buttonText}</button>
                { showFailureMessage === true && (<div className=""><div className="">Error! Please try again. If you continue to encounter problems, please contact <Link href="mailto:marca@ccfil.com">marca@ccfil.com</Link></div></div>) }
              </form> </div>: <div className={``}><h2>Sign In</h2></div>}
          </div>
        </div>
      </div>
    </>
  )
}