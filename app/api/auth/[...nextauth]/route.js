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
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github" || account.provider == "google") {
        await connectDB()
        //check if user exists
        const currentUser =  await User.findOne({ email: user.email });
        console.log(currentUser);
        if (currentUser == null) {
          const newUser = new User({
            email: user.email,
            name: user.name,
            image: user.image,
          })
          await newUser.save();
        }
        return true;
      }
      
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.name.split(' ')[0];;
      session.user.image = dbUser.image;
      session.user.organizer = dbUser.isOrganizer;
      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
