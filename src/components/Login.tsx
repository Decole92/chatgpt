'use client'
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col justify-center items-center'>
        <Image src="https://uploads-ssl.webflow.com/621396eaae0610d2e24c450e/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png" alt="chatgpt_logo" width={300} height={300} />
        <button onClick={() => signIn('google') } className='text-3xl text-white font-bold animate-pulse'>
            Sign In to use chatGPT
        </button>
    </div>
  )
}

export default Login