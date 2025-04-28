"use client";
import React from "react";
import { Zap, ArrowDownToLine } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { getallevents } from "@/actions/useractions";

const Page = () => {
  const [textColor, setTextColor] = useState("#ff7c4f");
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getallevents();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleButtonClick = (timestamp) => {
    window.location.replace(`/event/${timestamp}`);
  };
  
  return (
    <>
      <div className="min-h-screen bg-[#f2f0e3]">
        {/* Hero Section - Updated for responsiveness */}
        <div className="max-w-6xl mx-auto px-4 text-center mt-20 md:mt-40 tracking-widest">
          <div className="text-3xl md:text-4xl font-serif text-[rgb(22,22,22)]">
            <div
              style={{ color: textColor }}
              className="flex flex-col md:flex-row justify-center items-center"
            >
              <div className="text-primary text-5xl md:text-7xl">Need to</div>
              <div className="mt-2 md:mt-0 md:ml-2">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "Organize Events?",
                    1000,
                    "Manage Events?",
                    1000,
                    "Host Events?",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  cursor={false}
                />
              </div>
            </div>
            <div className="text-4xl md:text-6xl mt-4">
              Join <span className="text-secondary italic">GoRSVP</span>
            </div>
          </div>

          <p className="mt-6 md:mt-12 text-lg md:text-2xl text-[rgb(22,22,22)] opacity-80 max-w-3xl mx-auto px-2">
            Discover, plan, and experience extraordinary moments, all in one
            place
            <br className="hidden md:block" />
            Where moments become memories, effortlessly.
          </p>
        </div>
        
        {/* Arrow indicator - adjusted spacing for mobile */}
        <div className="border-b-2 border-transparent mt-16 md:mt-36 mb-16 md:mb-32 text-secondary text-center flex justify-center items-center animate-bounce-fast">
          <ArrowDownToLine className="w-12 h-12 md:w-20 md:h-20" />
        </div>
        
        {/* Categories Section - made responsive */}
        <nav className="flex flex-col justify-center items-center mx-auto w-full px-4 gap-4 md:gap-6 mt-8 md:mt-10 mb-10 md:mb-16 text-center">
          <div className="text-center text-xl md:text-2xl mx-auto my-auto font-semibold text-primary p-3 md:p-6">
            Choose Your Favourite Genre
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 w-full max-w-4xl mx-auto">
            {[
              "Tedx",
              "Techfest",
              "Business",
              "Sports",
              "Lifestyle",
              "Gaming",
            ].map((category) => (
              <button
                key={category}
                className="bg-[rgb(249,248,240)] border-2 border-secondary text-secondary hover:bg-secondary hover:text-footertext py-2 px-3 md:px-4 rounded-full shadow text-xs md:text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
        
        {/* Top Picks Section - responsive layout */}
        <div className="mt-6 md:mt-10 mb-12 max-w-7xl min-w-0 mx-auto px-4">
          <h1 className="text-start text-xl md:text-2xl font-semibold text-primary mb-4 p-3 md:p-6">
            Top Picks for you
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {events.map((e) => (
              <div
                key={e.Timestamp}
                className="p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl w-full max-h-[32rem] overflow-hidden"
              >
                <div className="w-full h-40 md:h-44 overflow-hidden rounded-lg">
                  <img
                    src={e.eventBanner}
                    className="w-full h-full object-cover rounded-lg"
                    alt="Event Banner"       
                  />
                </div>
                <h3 className="text-md font-semibold text-gray-800 mt-4 md:mt-6 line-clamp-2">
                  {e.eventTitle}
                </h3>
                <p className="text-sm md:text-md text-black mt-2 line-clamp-3">
                  {e.eventDescription}
                </p>
                <span className="text-sm md:text-md text-gray-500 mt-2 block">
                  {new Date(e.eventDate).toLocaleDateString()} | Venue:{" "}
                  {e.eventLocation}
                </span>
                <div className="flex justify-end mt-3 md:mt-4">
                  <button 
                    onClick={() => handleButtonClick(e.Timestamp)} 
                    className="flex items-center justify-center py-1 md:py-2 gap-1 md:gap-2 rounded-full border border-secondary bg-foreground text-secondary hover:bg-secondary hover:text-footertext px-2 md:px-3 text-sm"
                  >
                    <Zap className="w-4 h-4 md:w-5 md:h-5" /> Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;