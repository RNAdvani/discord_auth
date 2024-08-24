"use server"
import { signIn, signOut } from "@/auth";

export const SignOut = async ()=>{
    await signOut();
}

export const SignIn = async ()=>{
    await signIn("discord");
}