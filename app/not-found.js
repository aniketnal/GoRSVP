"use client";
import { Link } from "lucide-react";
import React, { useState } from "react";

const NotFound = () => {
  const [showRickRoll, setShowRickRoll] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {!showRickRoll ? (
        // Original 404 Content
        <div className="w-3/4 px-8 rounded">
          <h1 className="text-8xl font-bold text-center text-secondary">404</h1>
          <p className="text-2xl text-center text-primary mt-4">WE ARE SORRY PAGE NOT FOUND!</p>
          <p className="text-lg text-center text-primary mt-2">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, DELETED OR NEVER EXISTED.</p>
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="bg-secondary text-white py-2 px-6 rounded"
            >
              GO BACK TO HOME
            </Link>
          </div>
        </div>
      ) : (
        // Rick Roll Content
        <div className="w-full h-screen">
          <div className="relative w-full h-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Never Gonna Give You Up"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      {/* Button always visible */}
      <div className="fixed top-20 right-2 text-center z-10">
        <button
          onClick={() => setShowRickRoll(!showRickRoll)}
          className="bg-foreground border-2 border-secondary text-secondary hover:bg-secondary hover:text-footertext py-2 px-6 rounded transition-colors duration-200 text-lg font-bold"
        >
          {showRickRoll ? "GET BACK LOL!" : "Click me for a suprise! 🎉"}
        </button>
      </div>
    </div>
  );
};

export default NotFound;