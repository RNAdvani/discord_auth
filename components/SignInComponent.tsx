"use client"
import { SignIn, SignOut } from '@/actions/auth'
import { signIn } from 'next-auth/react'
import React from 'react'

const SignInComponent = () => {
  return (
    <div className='flex flex-col'>
    <button onClick={()=>signIn("discord")}>
   Sign In
 </button>
 <button onClick={()=>SignOut()}>
   Sign Out
 </button>
 </div>
  )
}

export default SignInComponent