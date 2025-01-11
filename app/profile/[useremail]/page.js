"use client"
import React, {useEffect} from 'react'
import { useParams } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '@/components/Navbar';

const page = () => {
  const { data: session, status } = useSession();
  const params = useParams();
  const useremail = decodeURIComponent(params.useremail);
  useEffect(() => {
      if (status === "loading") return; 
      if (!session) window.location.replace("/"); 
      console.log(session);
  }, [session, status]);
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {return null;}

  if(session.user.email !== useremail){
    return <p className='text-xl text-primary flex justify-center align-center'>Unauthorized access</p>;
  }

  return (
    <>
    {/* Change the page from here. available components - session.user.email, session.user.Name, session.user.image */}
    <Navbar />
        <div className='text-primary'>

        Profile Page of {useremail}
        </div>
    </>
  )
}

export default page
