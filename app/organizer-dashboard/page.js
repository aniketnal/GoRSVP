"use client";
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { getusersevent, deleteevent } from "@/actions/useractions";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";

const page = () => {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const data = await getusersevent(session.user.email);
      console.log(data.event);
      setEvents(data.event);
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
  const handleRSVPClick = (timestamp) => {
    window.location.replace(`/rsvps/${timestamp}`);
  };
  const handleDeleteClick = async (timestamp) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
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
  //calculate the sum of rsvp field in events
  let totalRsvps = 0;
  events.forEach((event) => {
    totalRsvps += event.rsvps.length;
  });
  let totalattendees = 0;
  events.forEach((event) => {
    totalattendees += event.checkin.length;
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
              data: [
                { id: 0, value: events.length, label: "Total Events" },
                { id: 1, value: totalRsvps, label: "Total RSVP's" },
                { id: 2, value: totalattendees, label: "Total Attended" }, //to be thought upon
              ],
            },
          ]}
          width={700}
          height={350}
        />
      </div>

      <div className="border-b-2 mt-6"></div>
      {/* Your Events Section */}
      <div className="flex flex-col justify-center p-4">
        <div className="text-primary text-2xl ml-8 mb-10">My Events</div>

        <table className="ml-6 w-[96%] border-collapse text-primary bg-white rounded-lg overflow-hidden border-2 border-primary">
          <thead>
            <tr className="bg-[rgb(249,248,240)]">
              <th className="p-4 border-2 text-center border-primary">
                Sr. No.
              </th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">
                Event Name
              </th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">
                Date
              </th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">
                Time
              </th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">
                Location
              </th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">
                RSVP's
              </th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">
                Actions
              </th>
            </tr>
          </thead>
          {/* dynamic rows below */}
          <tbody>
            {events.map((event, index) => (
              <tr
                key={event.Timestamp}
                className={
                  index % 2 === 0
                    ? "bg-foreground border-2 border-primary"
                    : "bg-[rgb(249,248,240)] border-2 border-primary"
                }
              >
                <td className="p-4 border-2 text-center bo border-primary">
                  {index+1}
                </td>
                <td className="p-4 border-2 text-center bo border-primary">
                  {event.eventTitle}
                </td>
                <td className="p-4 border-2 text-center bo border-primary">
                  {new Date(event.eventDate).toLocaleDateString()}
                </td>
                <td className="p-4 border-2 text-center bo border-primary">
                  {event.eventTime}
                </td>
                <td className="p-4 border-2 text-center bo border-primary">
                  {event.eventLocation}
                </td>
                <td
                  className="p-4 border-2 text-center bo border-primary"
                  
                >
                  {event.rsvps.length}
                </td>
                <td className="p-4 mx-auto border-2 border-primary">
                  <div className="flex justify-center  gap-3">
                    <button
                      className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md"
                      onClick={() => {
                        handleViewClick(event.Timestamp);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md"
                      onClick={() => {
                        handleEditClick(event.Timestamp);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md"
                      onClick={() => {
                        handleDeleteClick(event.Timestamp);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="px-3 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md"
                      onClick={() => {
                        handleRSVPClick(event.Timestamp);
                      }}
                    >
                      RSVPs
                    </button>
                  </div>
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
