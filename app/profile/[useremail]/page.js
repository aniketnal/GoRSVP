"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getuser } from "@/actions/useractions";
const page = () => {
  const params = useParams();
  const useremail = decodeURIComponent(params.useremail);
  const [resp, setresp] = useState([]);
  const fetchUser = async () => {
    try {
      const rep = await getuser(useremail);
      if (!rep.ok) {
        alert("User not found");
        window.location.replace("/");
      } else {
        setresp(rep.user);
      }
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(resp);

  return (
    <>
      {/* Change the page from here. available components - session.user.email, session.user.Name, session.user.image */}
      <div className="text-primary">
        <h2 className="ml-10 mt-10 text-2xl font-bold mb-8">User Profile</h2>
        {/* Main Content */}
        <main className="max-w-4xl p-8 gap-4 flex flex-col mx-auto mb-32 bg-[#f2f0e3] rounded-lg shadow-lg min-h-[53vh]">
          <h2 className="text-start left-0 text-2xl font-bold mb-8 ">
            Edit Your Profile
          </h2>
          <div className="flex gap-24 items-start">
            {/* Profile Picture */}
            <div className="w-48 h-48 rounded-full border-2 border-[#ff7c4f] flex items-center justify-center bg-[#f2f0e3] overflow-hidden">
              <img src={resp.image} alt="profile picture" />
            </div>

            {/* Form Fields */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]">
                  {resp.name}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]">
                  {resp.email}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Account Type
                </label>
                <div className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]">
                  {resp.isOrgainzer ? "Organizer" : "User"}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Account Created
                </label>
                <div className="w-full p-2 border border-[#ff7c4f] rounded focus:outline-none focus:ring-2 focus:ring-[#ff7c4f] focus:border-transparent bg-[#f2f0e3]">
                {new Date(resp.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
