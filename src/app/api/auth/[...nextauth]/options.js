import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../../lib/model/user";
import bcrypt from "bcrypt"
export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("profile Google: ", profile);

        let userRole = "Google User"
        if (profile?.email === "jahidhasan20u@gmail.com") {
          userRole = "Admin"
        }

        return {
          ...profile,
          id: profile.sub,
          role: userRole
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    }),
    GithubProvider({
      profile(profile) {
        console.log("profile Google: ", profile);

        let userRole = "Github User"
        if (profile?.email === "jahidhasan20u@gmail.com") {
          userRole = "Admin"
        }

        return {
          ...profile,
          role: userRole
        }

      },
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
         email: {
          label: "email:",
          type: "text",
          placeholder: "Your-email"
         },
         password: {
          label: "password:",
          type: "password",
          placeholder: "Your-password"
         },
      }, 
      async authorize (credentials) {
        try {
          const foundUser = await User.findOne({email: credentials.email}).lean().exec();

          if  (foundUser) {
            console.log("user exist");
            const match = await bcrypt.compare(credentials.password, foundUser.password)
            if(match) {
              console.log("Good Pass");
              delete foundUser.password

              foundUser["role"] =  "Unverified email"
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null
      }
    }),

  ],
  pages: {
    signIn:"/auth/signIn"
  },
  
  callbacks: {
    async jwt({token, user }) {
      if(user) token.role = user.role
      return token
    },
    async session({session, token}){
      if(session?.user) session.user.role = token.role
      return session
    }
  },
  
}


