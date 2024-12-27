
import React from 'react';

const page= () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Event Dashboard */}
      <div className='flex justify-between mx-4'>
        <h2 className='text-xl mt-4 font-bold'>Organizer's Dashboard</h2>
        <button type="button" className='mt-4 text-white bg-primary rounded-md shadow-sm focus:shadow-md hover:bg-secondary w-fit p-2'>+ Create Event</button>
      </div>
        {/* Cards */}
        <div className='flex justify-center gap-40 mt-8'>
        <div className="bg-white p-4 rounded-lg flex shadow hover:shadow-lg w-1/3">
          <aside>LOGO HERE</aside>
          <div className='ml-8'>
          <h2 className="text-lg font-semibold text-gray-800">Total Events</h2>
          <p className="text-lg text-black mt-2">100</p>
          </div>
        
        </div>
        <div className="bg-white p-4 flex rounded-lg shadow hover:shadow-lg w-1/3">
          <aside>LOGO HERE</aside>
          <div className='ml-8 flex flex-col w-full'>
          <h2 className="text-lg font-semibold text-gray-800">Total RSVP's</h2>
          <p className="text-lg text-black mt-2">71</p>
          <button className='border border-black p-1 text-sm bg-slate-200 mt-auto self-end'>view</button>
          </div>
        </div>
          
        </div>
        
        <div className='border-b-2 border-gray-200 mt-6'></div>
        {/* Your Events Section */}
      <div className="mt-8 max-w-6xl min-w-2xl mx-auto  ">
        <h1 className="text-2xl mx-auto my-auto font-semibold text-primary mb-4">Your Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
              <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"/>
              <h3 className="text-md font-semibold text-gray-800">Rhythm & Beats: Kasukabe Events</h3>
              <p className="text-md text-black mt-2">A night of electrifying Music!</p>
              <span className="text-md text-gray-500 mt-2 block">Dec 20, 2024 | Venue: Dhakkan Curry</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;