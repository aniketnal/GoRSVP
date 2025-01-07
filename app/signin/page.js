"use client"
import Navbar from "@/components/Navbar";
import React from "react";
import { Github } from 'lucide-react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

const page = () => {
  const { data: session } = useSession();

  if(session){
    const router = useRouter();
    router.push("/");
  }
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-foreground">
      <div className="w-full max-w-sm bg-[rgb(249,248,240)]  p-6 rounded-md shadow-xl">
        <h2 className="text-4xl font-bold text-center text-secondary">
          Sign In
        </h2>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-md font-medium text-secondary"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary text-black bg-foreground"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-md font-medium text-secondary"
            >
              Password
            </label>
            <input
          
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary text-black  bg-foreground"
              required
            />
          </div>
          <button                                 
            type="submit"
            className="mt-6 w-full px-4 py-2 text-secondary bg-foreground border-2 border-secondary  rounded-md shadow-sm focus:shadow-md hover:bg-secondary  hover:text-white focus:outline-none "
          >
            Sign In
          </button>
        </form>
        <div className="text-primary text-center pt-4 font-bold">
          OR
        </div>
        <div className="mt-6 flex justify-around ">

          <button onClick={() => signIn("github")} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-4">
            <Github /> &nbsp;
            Github
          </button>
          <button
            type="button" onClick={() => signIn("google")}
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-4"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
