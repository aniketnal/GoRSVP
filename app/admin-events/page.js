"use client";
import React, { useState, useEffect } from "react";
import PanelNav from "@/components/PanelNav";
import { getalleventsadmin, deleteevent } from "@/actions/useractions";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";

export default function Page() {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const eventdata = await getalleventsadmin();
      setEvents(eventdata.events);
    } catch (error) {
      console.log("error Occured", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  
  if(status == "loading"){return;}
  if(session.user.admin == false && status == "authenticated"){
    window.location.replace("/");
  }
  const handleViewClick = (id) => {
    window.location.replace(`/event/${id}`);
  };
  const handleDeleteClick = async (timestamp) => {
      const confirmed = window.confirm("Are you sure you want to delete this event?");
      if (confirmed) {
        const result = await deleteevent(timestamp);
        if (result.ok) {
          toast.success("Event Deleted Successfully");
          fetchEvents();
        } else {
          toast.error("Failed to delete event");
        }
      }
    };

  return (
    <>
      <div className="p-1 mx-6">
        <PanelNav />
      </div>
      <div className="min-h-screen min-w-full bg-foreground p-4">
      <div className="text-primary text-2xl font-bold mx-8 my-4"> All Listed Events
      </div>
        {/* Main Content */}
        <table className="ml-6 w-[96%] border-collapse text-primary bg-white rounded-lg overflow-hidden border border-primary">
          <thead>
            <tr className="bg-[rgb(249,248,240)]">
              <th className="p-4 border-2 text-center border-primary">
                Sr. No.
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Organizer Name
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Event Title
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Event Date & Time
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Event Capacity
              </th>
              <th className="p-4 border-2 text-center border-primary">
                Actions
              </th>
            </tr>
          </thead>
          {/* dynamic rows below */}
          <tbody>
            {events.map((u, index) => (
              <tr
                key={u.Timestamp}
                className={
                  index % 2 === 0 ? "bg-foreground border-2 border-primary" : "bg-[rgb(249,248,240)] border-2 border-primary"
                }
              >
                <td className="p-4 border-2 text-center border-primary">{index+1}</td>
                <td className="p-4 border-2 text-center border-primary">{u.organizerName}</td>
                <td className="p-4 border-2 text-center border-primary">{u.eventTitle}</td>
                <td className="p-4 border-2 text-center border-primary">{new Date(u.eventDate).toLocaleDateString()} at {u.eventTime}</td>
                <td className="p-4 border-2 text-center border-primary">{u.eventCapacity}</td>  
                <td className="p-4 border-2 text-center border-primary">
                <div className="flex justify-center  gap-3">
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleViewClick(u.Timestamp)}}>
                    View
                  </button>
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleDeleteClick(u.Timestamp)}}>
                    Delete
                  </button>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
