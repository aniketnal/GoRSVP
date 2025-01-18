"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { checkinevent, checkoutevent, getevent } from "@/actions/useractions";
import { toast } from "react-toastify";

const page = () => {
  const { data: session, status } = useSession();
  const params = useParams();
  const eveid = params.eveid; // Ensure this matches the dynamic route parameter
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data = await getevent(eveid);
      console.log(data);
      setEvent(data.event);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching event:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      signIn();
      return;
    }

    if (status === "authenticated") {
      fetchEvents();
    }
  }, [status, eveid]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }
  const handleCheckboxChange = async (email, checked) => {
    if (checked) {
      // console.log(`Checkbox at index ${email} is checked`);
      const resp = await checkinevent(eveid, email)
      if(resp.ok){
        toast.success(`${email} Checked in successfully`)
      }
      else{
        toast.error(`Error checking in for ${email}`)
      }
    }
    else{
        
        const resp = await checkoutevent(eveid, email)
      if(resp.ok){
        toast.success(`${email} Checked Out successfully`)
      }
      else{
        toast.error(`Error checking in for ${email}`)
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-foreground mt-8 text-primary flex  items-center flex-col">
        <div className=" text-2xl font-bold text-center mb-4">All RSVPS for Event :{event.eventTitle}</div>
        <table className="mx-auto w-[80%] border-collapse text-primary bg-white rounded-lg overflow-hidden border border-primary">
          <thead>
            <tr className="bg-[rgb(249,248,240)]">
              <th className="p-4 border-2 text-center border-primary">
                Sr. No.
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Email ID
              </th>
              <th className="p-4 border-2 text-center border-primary">
                CheckIn
              </th>
            </tr>
          </thead>
          {/* dynamic rows below */}
          <tbody>
            {event.rsvps.map((u, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-foreground border-2 border-primary"
                    : "bg-[rgb(249,248,240)] border-2 border-primary"
                }
              >
                <td className="p-4 border-2 text-center border-primary">
                  {index + 1}
                </td>
                <td className="p-4 border-2 text-center border-primary">{u}</td>
                <td className="p-4 border-2 text-center border-primary">
                  <input type="checkbox" onChange={(e) => handleCheckboxChange(u, e.target.checked)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
