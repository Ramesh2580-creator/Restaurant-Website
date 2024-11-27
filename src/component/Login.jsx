import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Login = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login");

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <form className="self-center  max-w-[23vw] max-w-[330px] text-gray-800 bg-white shadow-lg flex flex-col gap-6 p-8 rounded-lg animate-fadein border border-gray-300">
        <div className='flex justify-between items-center text-black'>
          <h2 className="font-medium">{currState}</h2>
          <img onClick={() => setShowLogin(false)} className="w-4 cursor-pointer" src={assets.cross_icon} />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? <></> : <input className="outline-none border-solid border-2 border-gray-500 p-1 rounded-md" type="text" placeholder='Your name' required />}
          <input className="outline-none border-solid border-2 border-gray-500 p-1 rounded-md" type='email' placeholder='Your email' required />
          <input className="outline-none border-solid border-2 border-gray-500 p-1 rounded-md" type='password' placeholder='Password' required />
        </div>
        <button className="border-none p-2 rounded-sm text-white bg-gray-900 ">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="flex items-start gap-2 -mt-3">
          <input className="mt-2" type='checkbox' required />
          <p>By Continuing i agree to the terms of use & privacy Policy</p>
        </div>
        {currState === "Login"
          ? <p> Create a new account?<span onClick={() => setCurrState("Sign Up")} className="text-red-600 font-medium cursor-pointer">Click here</span> </p>
          : <p> Already have a account?<span onClick={() => setCurrState("Login")} className="text-red-600 font-medium cursor-pointer">Login here</span> </p>
        }
      </form>
    </div>
  )
}

export default Login;