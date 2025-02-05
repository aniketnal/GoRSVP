"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useParams } from "next/navigation";
import { getevent, updateevent } from "@/actions/useractions";
import { toast } from "react-toastify";

const Page = () => {
  const { data: session, status } = useSession();
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [event, setevent] = useState({
    eventTitle: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    eventBanner: "",
  });

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      signIn();
      return;
    }

    if (status === "authenticated" && session) {
      const fetchEvent = async () => {
        const ts = params.evtime;
        try {
          const data = await getevent(ts);
          setevent(data.event);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching event:", error);
          setLoading(false);
        }
      };

      fetchEvent();
    }
  }, [session, status]);

  if (status === "loading" || loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setevent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ts = params.evtime;
    try {
      const result = await updateevent(ts, event);
      if (result.ok) {
        toast.success("Event updated successfully!");
        window.location.replace("/");
      } else {
        toast.error("Failed to update event.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="bg-foreground flex justify-center items-center min-h-screen">
      <div className="bg-[rgb(249,248,240)] p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-semibold text-secondary mb-4">
          Create New Event
        </h1>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="eventTitle"
                className="block text-medium font-medium text-gray-900"
              >
                Event Title
              </label>
              <input
                id="eventTitle"
                name="eventTitle"
                value={event.eventTitle}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Hackathon 2025"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="eventDate"
                className="block text-medium font-medium text-gray-900"
              >
                Event Date
              </label>
              <input
                id="eventDate"
                name="eventDate"
                value={new Date(event.eventDate).toISOString().split("T")[0]}
                onChange={handleInputChange}
                required
                type="date"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="eventTime"
                className="block text-medium font-medium text-gray-900"
              >
                Event Time
              </label>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                value={event.eventTime}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-medium font-medium text-gray-900"
              >
                Location
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                value={event.eventLocation}
                onChange={handleInputChange}
                required
                placeholder="Nashik Central"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="maxCapacity"
                className="block text-medium font-medium text-gray-900"
              >
                Maximum Capacity
              </label>
              <input
                type="number"
                id="eventCapacity"
                name="eventCapacity"
                value={event.eventCapacity}
                onChange={handleInputChange}
                required
                placeholder="e.g. 500"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="bannerUrl"
                className="block text-medium font-medium text-gray-900"
              >
                Banner URL
              </label>
              <input
                type="url"
                id="eventBanner"
                name="eventBanner"
                value={event.eventBanner}
                onChange={handleInputChange}
                required
                placeholder="e.g. drive.google.com/path"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-medium font-medium text-gray-900"
            >
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              value={event.eventDescription}
              onChange={handleInputChange}
              required
              rows="4"
              placeholder="Write event description here..."
              className="w-full resize-none px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black font-medium"
              spellCheck="true"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => window.location.replace("/")}
              className="px-4 py-2 bg-primary  text-footertext rounded-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 text-secondary bg-foreground rounded-md  shadow-sm focus:shadow-md hover:bg-secondary hover:text-footertext border-2 border-secondary"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
