import React from "react";

const EventDetailsPage = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mb-6 mt-6">
        {/* Event Banner */}
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" // Replace with dynamic image URL
          alt="Event Banner"
          className="w-full h-52 object-cover rounded-md mb-4"
        />

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-center text-gray-800">
                Radiance: A New Year's Celebration
            </h1>
            <p className="text-gray-600 text-sm text-center mb-4">
              Celebrate the start of something new!
            </p>
            <p className="text-sm font-medium text-gray-800 flex items-center mb-2">
              <span className="mr-2">👤</span> Kasukabe Events
            </p>
            <p className="text-sm font-medium text-gray-800 mb-2">
              <strong>Date and Time:</strong> Tue, Dec 31st 10PM onwards
            </p>
            <p className="text-sm font-medium text-gray-800 mb-6">
              <strong>Location:</strong> Tamara, Nashik
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              About this Event
            </h2>
            <p className="text-gray-700 text-sm border border-gray-200 p-3 rounded-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-64 bg-gray-50 p-4 rounded-lg shadow-md self-start">
            <h3 className="text-lg font-semibold text-center text-gray-800">
                Radiance: A New Year's Celebration
            </h3>
            <p className="text-sm text-gray-600 text-center mb-4">
                Celebrate the start of something new!
            </p>
            <p className="text-sm font-medium text-center text-gray-800 mb-4">
              Slot: <strong>100 of 500</strong>
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

export default EventDetailsPage;
