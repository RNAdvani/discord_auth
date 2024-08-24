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
        authorization : "https://discord.com/oauth2/authorize?client_id=1276798228016271361&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+guilds+email"
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