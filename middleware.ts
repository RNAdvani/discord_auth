import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

export default auth((req)=>{
    const nextUrl = new URL(req.nextUrl);
    const isLoggedIn = !!req.auth;
    const publicRoute = "/"
    const apiAuthPrefix = "/api/auth"
    const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    if(isApiRoute) return ;
    if(!isLoggedIn){
        if(nextUrl.pathname===publicRoute) return ;
        return NextResponse.redirect(new URL("/", nextUrl));
    }
    return ;
})

export const config = {
    matcher:['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}