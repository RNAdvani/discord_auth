import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
  providers: [
    Discord({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        authorization : process.env.DISCORD_AUTHORIZATION,
    })
  ],
  session : { strategy :"jwt", maxAge: 30 * 24 * 60 * 60 },
  callbacks: {
    async signIn({user, account, profile}) {
        console.log(user, account, profile)
      return true 
    },
    async jwt({token}){
        token.accessToken = token.accessToken;
        return token;
    },
    async session({session, token}){
        
        return session;
    }
  },
})