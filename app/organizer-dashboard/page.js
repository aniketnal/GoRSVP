"use client"
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const page = () => {
  //use effect se events aaayenge
  const events = [
    {
      name: "Event 1",
      date: "12/12/2021",
      time: "12:00 PM",
      location: "Location 1",
      rsvps: 100,
      action: "Edit",
      action1: "Delete",
      action2: "View",
    },
    {
      name: "Event 2",
      date: "12/12/2021",
      time: "12:00 PM",
      location: "Location 2",
      rsvps: 200,
      action: "Edit",
      action1: "Delete",
      action2: "View",
    },
    {
      name: "Event 3",
      date: "12/12/2021",
      time: "12:00 PM",
      location: "Location 3",
      rsvps: 123,
      action: "Edit",
      action1: "Delete",
      action2: "View",
    },
  ];

  // issue is when signout is clicked, it should redirect to the landing page but it is not happening -DEPRECATED (/nav)
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
                { id: 0, value: 12, label: "Total Events" },
                { id: 1, value: 150, label: "Total RSVP's" },
                { id: 2, value: 10, label: "Total Attended" },
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
                key={event.name}
                className={
                  index % 2 === 0 ? "bg-foreground" : "bg-[rgb(249,248,240)]"
                }
              >
                <td className="p-4 border-t">{event.name}</td>
                <td className="p-4 border-t">{event.date}</td>
                <td className="p-4 border-t">{event.time}</td>
                <td className="p-4 border-t">{event.location}</td>
                <td className="p-4 border-t">{event.rsvps}</td>
                <td className="p-4 border-t">
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md">
                    View
                  </button>
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md">
                    Edit
                  </button>
                  <button className="px-3 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md">
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
