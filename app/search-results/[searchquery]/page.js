"use client";
import React, { useEffect,useState } from "react";
import { useParams } from "next/navigation";
import { searchevents } from "@/actions/useractions";
import { Zap } from "lucide-react";

const page = () => {
  const params = useParams();
  const searchquery = decodeURIComponent(params.searchquery);

  const [events, setEvents] = useState([]);
  const fetchresults = async () => {
    try {
      const results = await searchevents(searchquery);
      if (results.ok) {
        // console.log(results.events);
        setEvents(results.events);
      }
    } catch (error) {
      console.log("Some eror occured", error);
    }
  };
  useEffect(() => {
    fetchresults();
  }, [searchquery]);
  const handleButtonClick = (timestamp) => {
    window.location.replace(`/event/${timestamp}`);
  };
  return (
    <div>
      <div className="mt-10 mb-12 max-w-7xl min-w-2xl mx-auto">
          <h1 className="text-start text-2xl mx-auto my-auto font-semibold text-primary mb-4 p-6">
            Top Search Results 
          </h1>
          <div className="flex justify-start items-center md:grid-cols-3 gap-10  flex-wrap">
            {events.map((e) => (
              <div
                key={e.Timestamp}
                className="p-6 rounded-lg shadow-md hover:shadow-xl w-[30%] overflow-scroll h-[25rem]"
              >
                <img
                  src={e.eventBanner}
                  className="border rounded-lg text-primary h-44 w-80"
                  alt="eventBanner"       
                />
                <h3 className="text-md font-semibold text-gray-800 mt-6">
                  {e.eventTitle}
                </h3>
                <p className="text-md text-black mt-2">{e.eventDescription}</p>
                <span className="text-md text-gray-500 mt-2 block">
                  {new Date(e.eventDate).toLocaleDateString()} | Venue:{" "}
                  {e.eventLocation}
                </span>
                <div className="flex justify-end mt-4">
           
                  <button onClick={()=>{handleButtonClick(e.Timestamp)}} className="flex items-center justify-center py-2 gap-2 rounded-full border border-secondary bg-foreground text-secondary hover:bg-secondary hover:text-footertext px-2">
                    <Zap /> Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default page;
