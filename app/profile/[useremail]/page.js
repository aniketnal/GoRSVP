"use client"
import React, {useEffect} from 'react'
import { useParams } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

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
      <div className='text-primary'>

          
        
        <h2 className="ml-10 mt-10 text-2xl font-bold mb-8">User Profile</h2>
          {/* Main Content */}
        <main className="max-w-4xl p-8 gap-4 flex flex-col mx-auto mb-32 bg-[#f2f0e3] rounded-lg shadow-lg min-h-[53vh]">  
          <h2 className='text-start left-0 text-2xl font-bold mb-8 '>Edit Your Profile</h2>
          <div className="flex gap-24 items-start">
            {/* Profile Picture */}
            <div className="w-48 h-48 rounded-full border-2 border-[#ff7c4f] flex items-center justify-center bg-[#f2f0e3]">
                <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>

            {/* Form Fields */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" value={session.user.name}
                  className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]"
                />
              </div>
              

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" value={session.user.email}
                  className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Account Type</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Account Created</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default page
