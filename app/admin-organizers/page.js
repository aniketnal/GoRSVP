"use client"
import React from 'react';
import PanelNav from '@/components/PanelNav';

export default function Page() {
  return (
    <>
    <div className='p-1 mx-6'>
        <PanelNav/>
    </div>
    <div className="min-h-screen min-w-full bg-foreground p-4">
      {/* Main Content */}      
      <table className="ml-6 w-[96%] border-collapse text-primary bg-white rounded-lg overflow-hidden border border-primary">
          <thead>
            <tr className="bg-[rgb(249,248,240)]">
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">Event Name</th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">Date</th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">Time</th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">Location</th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">RSVP's</th>
              <th className="p-4 text-center font-semibold border-r-2 border-b-2 border-primary">Actions</th>
            </tr>
          </thead>
          {/* dynamic rows below */}
          {/* <tbody>
            {events.map((event, index) => (
              <tr
                key={event.Timestamp}
                className={
                  index % 2 === 0 ? "bg-foreground border-2 border-primary" : "bg-[rgb(249,248,240)] border-2 border-primary"
                }
              >
                <td className="p-4 border-t text-center border-r-2 border-primary">{event.eventTitle}</td>
                <td className="p-4 border-t text-center border-r-2 border-primary">{new Date(event.eventDate).toLocaleDateString()}</td>
                <td className="p-4 border-t text-center border-r-2 border-primary">{event.eventTime}</td>
                <td className="p-4 border-t text-center border-r-2 border-primary">{event.eventLocation}</td>
                <td className="p-4 border-t text-center border-r-2 border-primary">{event.rsvps.length}</td> 
                <td className="p-4 flex justify-center border-t gap-3 border-r-2 border-primary">
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleViewClick(event.Timestamp)}}>
                    View
                  </button>
                  <button className="px-3 mr-2 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleEditClick(event.Timestamp)}}>
                    Edit
                  </button>
                  <button className="px-3 py-1 border-2 border-secondary text-secondary hover:text-footertext hover:bg-secondary rounded-md" onClick={()=>{handleDeleteClick(event.Timestamp)}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      
    </div>
    </>
  );
}
