import React from "react";
import Link from "next/link";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

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
    { field: 'events', headerName: 'Events Conducted', width: 220 },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Event Dashboard */}
      <div className="flex justify-between mx-4">
        <h2 className="text-xl mt-4 font-bold">Organizer's Dashboard</h2>
        <button
          type="button"
          className="mt-4 text-white bg-primary rounded-md shadow-sm focus:shadow-md hover:bg-secondary w-fit p-2"
        >
          <Link href="./createevent">+ Create Event</Link>
        </button>
      </div>
      {/* Cards */}
      <div className="flex justify-center gap-40 mt-8">
        <div className="bg-white p-4 rounded-lg flex shadow hover:shadow-lg w-1/3">
          <aside>LOGO HERE</aside>
          <div className="ml-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Total Events
            </h2>
            <p className="text-lg text-black mt-2">100</p>
          </div>
        </div>
        <div className="bg-white p-3 flex rounded-lg shadow hover:shadow-lg w-1/3">
          <aside>LOGO HERE</aside>
          <div className="ml-4 flex flex-col w-full">
            <h2 className="text-lg font-semibold text-gray-800">
              Total RSVP's
            </h2>
            <p className="text-lg text-black mt-2">71</p>
            <button className="border border-black p-1 text-sm bg-slate-200 mt-auto self-end">
              view
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-200 mt-6"></div>
      {/* Your Events Section */}
      <div className="min-h-screen min-w-full bg-gray-50 p-4">
            {/* Main Content */}      
            <div style={{ height: 500, width: '90%', displayflex: 'flex', justifyContent: 'center', margin: 'auto' }}>
            <DataGrid rows={rows} columns={columns} />
            </div>
            
      </div>
    </div>
  );
};

export default page;
