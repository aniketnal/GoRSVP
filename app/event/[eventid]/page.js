"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getevent } from "@/actions/useractions";

const page = () => {
  const params = useParams();
  const eveid = params.eventid;
  const [event, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getevent(eveid);
        // console.log(data.event, "event ka data");
        setEvents(data.event);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mb-6 mt-6">
        {/* Event Banner */}
        <img
          src={event.eventBanner}
          alt="event banner"
          className="w-full h-52 object-cover rounded-md mb-4"
        />

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-center text-gray-800">
              {event.eventTitle}
            </h1>

            <p className="text-sm font-medium text-gray-800 flex items-center mb-2">
              <span className="mr-2">👤</span> {event.organizerName}
            </p>
            <p className="text-sm font-medium text-gray-800 mb-2">
              <strong>Date and Time:</strong> {new Date(event.eventDate).toLocaleDateString()} at {event.eventTime} hrs.
            </p>
            <p className="text-sm font-medium text-gray-800 mb-6">
              <strong>Location:</strong> {event.eventLocation}
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              About this Event
            </h2>
            <p className="text-gray-700 text-sm border border-gray-200 p-3 rounded-md">
              {event.eventDescription}
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-64 bg-gray-50 p-4 rounded-lg shadow-md self-start">
            <h3 className="text-lg font-semibold text-center text-gray-800">
              {event.eventTitle}
            </h3>

            <p className="text-sm font-medium text-center text-gray-800 mb-4">
              Slot: <strong>Only {event.eventCapacity}</strong>
            </p>
            <button className="px-4 py-2 text-white rounded-md bg-primary shadow-sm focus:shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full">
              Reserve Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
