import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDB from "@/db/ConnectDB";
export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //THE LINE BELOW BREAKS THE CODE.
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }}
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB()
        //check if user exists
        //NOT GETTING EMAIL FROM GITHUB, hence can't compare and do rest operations
        const currentUser =  await User.findOne({ email: email });
        console.log(currentUser);
        if (!currentUser) {
          //create user
          const newUser = new User({
            email: user.email,
            username: email.split("@")[0],
          })
        }
        return true;
      }
      
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      console.log(dbUser);
      session.user.name = dbUser.username;
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
