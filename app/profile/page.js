// "use client"
import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from "next/navigation";

const page = () => {
  // const { data: session } = useSession();
  
  //   if(!session){
  //     const router = useRouter();
  //     router.push("/signin");
  //   }
  return (
    <div className='text-primary'>
      Profile Page
    </div>
  )
}

export default page
