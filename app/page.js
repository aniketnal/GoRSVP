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
        console.log(data.events);
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
      <div className="min-h-screen bg-[#f2f0e3] ">
        <div className="max-w-6xl mx-auto px-4 text-center mt-40 tracking-widest">
          <div className="text-4xl font-serif  text-[rgb(22,22,22)]">
            <div
              style={{ color: textColor }}
              className="flex justify-center items-center"
            >
              <div className="text-primary text-7xl">Need to</div> &nbsp;
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
                style={{ fontSize: "2em" }}
                cursor={false}
              />
            </div>
            <div className="text-6xl mt-4">
              Join <span className="text-secondary italic">GoRSVP</span>
            </div>
          </div>

          <p className="mt-12 text-2xl text-[rgb(22,22,22)] opacity-80 max-w-3xl mx-auto">
            Discover, plan, and experience extraordinary moments, all in one
            place
            <br />
            Where moments become memories, effortlessly.
          </p>
        </div>
        <div className="border-b-2 border-transparent mt-36 mb-32 text-secondary text-center flex justify-center items-center animate-bounce-fast">
          <ArrowDownToLine className="w-20 h-20 " />
        </div>
        {/* Categories Section */}
        <nav className="flex flex-col justify-center items-center mx-auto w-fit gap-6 mt-10 sm:grid-cols-6 mb-16 text-center ">
          <div className="text-center text-2xl mx-auto my-auto font-semibold text-primary p-6">
            Choose Your Favourite Genre
          </div>
          <div className="grid mx-auto w-fit gap-6 sm:grid-cols-6 text-center">
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
                className="bg-[rgb(249,248,240)] border-2 border-secondary text-secondary bg-foreground hover:bg-secondary hover:text-footertext py-2 px-4 rounded-full shadow text-sm font-medium hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
        {/* Top Picks Section */}
        <div className="mt-10 mb-12 max-w-7xl min-w-2xl mx-auto">
          <h1 className="text-start text-2xl mx-auto my-auto font-semibold text-primary mb-4 p-6">
            Top Picks for you
          </h1>
          <div className="flex justify-start items-center md:grid-cols-3 gap-10  flex-wrap">
            {events.map((e) => (
              <div
                key={e.Timestamp}
                className="p-6 rounded-lg shadow-md hover:shadow-xl"
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
    </>
  );
};

export default Page;
