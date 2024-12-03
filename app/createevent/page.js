import React from "react";

const CreateEvent = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Create New Event</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="eventTitle" className="block text-medium font-medium text-gray-900">
              Event Title
            </label>
            <input
              type="text"
              id="eventTitle"
              placeholder="Hackathon 2025"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-medium font-medium text-gray-900">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventTime" className="block text-medium font-medium text-gray-900">
              Event Time
            </label>
            <input
              type="time"
              id="eventTime"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-medium font-sm text-gray-900">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Nashik Central"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font:medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="maxCapacity" className="block text-medium text-gray-600">
              Maximum Capacity
            </label>
            <input
              type="number"
              id="maxCapacity"
              placeholder="e.g., 500"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font:medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bannerUrl" className="block text-medium font-medium text-gray-900">
              Banner URL
            </label>
            <input
              type="url"
              id="bannerUrl"
              placeholder="e.g www.pic.com"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font-medium"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Event Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Write event description here..."
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black font-medium"
              spellCheck="true"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-400 focus:ring-offset-1"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
