"use client"
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { getusersevent,deleteevent } from "@/actions/useractions";
import { useSession, signIn, signOut } from "next-auth/react";


const page = () => {

  const { data: session, status} = useSession();
  const [events, setEvents] = useState([]);
  // const [useratt, setuseratt] = useState(0)
  const fetchEvents = async () => {
    try {
      const data = await getusersevent(session.user.email);
      // console.log(data.event);
      setEvents(data.event);
      // setuseratt(data.userattended);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    if (status === "loading") return; 
    if (status === "unauthenticated") {
      signIn(); 
      return;
    }

    if (status === "authenticated" && session) {
      fetchEvents();
    }
  }, [session, status]);
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleViewClick = (timestamp) => {
    window.location.replace(`/event/${timestamp}`);
  };
  const handleEditClick = (timestamp) => {
    window.location.replace(`/editevent/${timestamp}`);
  };
  const handleDeleteClick = async (timestamp) => {
    const confirmed = window.confirm("Are you sure you want to delete this event?");
    if (confirmed) {
      const result = await deleteevent(timestamp);
      if (result.ok) {
        alert("Event Deleted Successfully");
        fetchEvents();
      } else {
        alert("Failed to delete event");
      }
    }
  };
  //calculate the sum of rsvp field in events
  let totalRsvps = 0;
  events.forEach((event) => {
    totalRsvps += event.rsvps.length;
  });
  return (
    <div className="min-h-screen bg-foregorund">
      {/* Event Dashboard */}
      <div className="flex justify-between mx-4">
        <h2 className="text-primary ml-8 text-xl mt-4 font-bold">
          Organizer's Dashboard
        </h2>
      </div>
      <div className="flex justify-center gap-12 mt-8">
        <PieChart
          series={[
            {
              //value shall be given by db
              data: [ 
                { id: 0, value: events.length, label: "Total Events" },
                { id: 1, value: totalRsvps, label: "Total RSVP's" }, 
                { id: 2, value: 5, label: "Total Attended" }, //checkins
              ],
            },
          ]}
          width={500}
          height={200}
        />
      </div>

      <div className="border-b-2 mt-6"></div>
      {/* Your Events Section */}
      <div className="flex flex-col justify-center p-4">
        <div className="text-primary text-2xl ml-8 mb-10">My Events</div>

        <table className="ml-6 w-[96%] border-collapse text-primary bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[rgb(249,248,240)]">
              <th className="p-4 text-left font-semibold">Event Name</th>
              <th className="p-4 text-left font-semibold">Date</th>
              <th className="p-4 text-left font-semibold">Time</th>
              <th className="p-4 text-left font-semibold">Location</th>
              <th className="p-4 text-left font-semibold">RSVP's</th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          {/* dynamic rows below */}
          <tbody>
            {events.map((event, index) => (
              <tr
                key={event.Timestamp}
                className={
                  index % 2 === 0 ? "bg-foreground" : "bg-[rgb(249,248,240)]"
                }
              >
                <td className="p-4 border-t">{event.eventTitle}</td>
                <td className="p-4 border-t">{new Date(event.eventDate).toLocaleDateString()}</td>
                <td className="p-4 border-t">{event.eventTime}</td>
                <td className="p-4 border-t">{event.eventLocation}</td>
                <td className="p-4 border-t">{event.rsvps.length}</td> 
                <td className="p-4 border-t">
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleViewClick(event.Timestamp)}}>
                    View
                  </button>
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleEditClick(event.Timestamp)}}>
                    Edit
                  </button>
                  <button className="px-3 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleDeleteClick(event.Timestamp)}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default page;
