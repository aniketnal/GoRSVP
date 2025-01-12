import React from "react";
import Link from "next/link";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { CalendarCheck } from 'lucide-react';

const page = () => {
  const generateSampleData = () => {
    const firstnames = [
      "James",
      "Emma",
      "Michael",
      "Sophia",
      "William",
      "Olivia",
      "John",
      "Ava",
    ];

    const lastnames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Davis",
      "Miller",
      "Wilson",
    ];
    const statuses = ["Active", "Pending", "Completed", "Cancelled", "On Hold"];
    const emails = [
      // Professional Emails
      "john.doe@company.com",
      "sarah.smith@enterprise.co.uk",
      "michael.brown@corporation.net",
      "m.johnson@business.org",

      // Gmail Accounts
      "davidwilson2024@gmail.com",
      "emily.parker85@gmail.com",
      "tech.ninja@gmail.com",
      "professional.coder@gmail.com",
      "webdev.master@gmail.com",
    ];

    return Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      OrgID: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      firstname: firstnames[Math.floor(Math.random() * firstnames.length)],
      lastname: lastnames[Math.floor(Math.random() * lastnames.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      email: emails[Math.floor(Math.random() * emails.length)],
      events: Math.floor(0 + Math.random() * 100),
    }));
  };

  const rows = generateSampleData();

  const columns = [
    { field: 'OrgID', headerName: 'Organizer id', width: 220 },
    { field: 'firstname', headerName: 'First Name', width: 220 },
    { field: 'lastname', headerName: 'Last Name', width: 220 },
    { field: 'status', headerName: 'Status', width: 220 },
    { field: 'email', headerName: 'Email', width: 240 },
    { field: 'events', headerName: 'Events Hosted', width: 220 },
    
  ];

  return (
    <div className="min-h-screen bg-foregorund">
      {/* Event Dashboard */}
      <div className="flex justify-between mx-4">
        <h2 className="text-primary ml-8 text-xl mt-4 font-bold">Organizer's Dashboard</h2>
      </div>
      {/* Cards */}
      <div className="flex justify-center gap-36 mt-8">
        <div className="bg-[rgb(249,248,240)] p-4 rounded-lg flex shadow-lg w-1/3">
          <aside> <CalendarCheck className="text-primary" /></aside>
          <div className="ml-8">
            <h2 className="text-lg font-semibold text-gray-800 flex items-end">
              Total Events
            </h2>
            <p className="text-lg text-black mt-2">100</p>
          </div>
        </div>
        <div className="bg-[rgb(249,248,240)] p-4 rounded-lg flex shadow-lg w-1/3">
          <aside> <CalendarCheck className="text-primary" /></aside>
          <div className="ml-8 flex justify-between w-full items-end">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Total RSVP's
              </h2>
              <p className="text-lg text-black mt-2">300</p>
            </div>
           <div>
           <button className="border-2 border-secondary rounded-md  px-2 py-1 hover:bg-secondary hover:text-footertext text-sm bg-foregorund text-secondary mt-auto self-end">
              view
            </button>
           </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 mt-6"></div>
      {/* Your Events Section */}
      <div className="min-h-screen bg-foreground min-w-full p-4">
            {/* Main Content */}      
            <div className="text-primary text-2xl ml-8 mb-10">My Events</div>
            <div style={{ height: 600, width: '90%', displayflex: 'flex', justifyContent: 'center', margin: 'auto' }}>
            <DataGrid className="bg-white" rows={rows} columns={columns} />
            </div>
            
      </div>
    </div>
  );
};

export default page;
