"use client"
import React from 'react';
import PanelNav from '@/components/PanelNav';
import Link from 'next/link';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function DashboardLayout() {

  const navItems = [
    {  label: 'admin-dashboard '},
    {  label: 'admin-users '},
    {  label: 'admin-organizers' },
    {  label: 'admin-events' }
  ];
 
  const generateSampleData = () => {
    const firstnames = [
      'James',
      'Emma',
      'Michael',
      'Sophia',
      'William',
      'Olivia',
      'John',
      'Ava'
  ];
  
  const lastnames = [
      'Smith',
      'Johnson',
      'Williams',
      'Brown',
      'Jones',
      'Davis',
      'Miller',
      'Wilson'
  ];
    const statuses = ['Active', 'Pending', 'Completed', 'Cancelled', 'On Hold'];
    const emails = [
      // Professional Emails
      'john.doe@company.com',
      'sarah.smith@enterprise.co.uk',
      'michael.brown@corporation.net',
      'm.johnson@business.org',
      
      // Gmail Accounts
      'davidwilson2024@gmail.com',
      'emily.parker85@gmail.com',
      'tech.ninja@gmail.com',
      'professional.coder@gmail.com',
      'webdev.master@gmail.com'
    ];
    
    return Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      eventID: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      organizerID: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      eventname: firstnames[Math.floor(Math.random() * firstnames.length)],
      organizer: lastnames[Math.floor(Math.random() * lastnames.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      email: emails[Math.floor(Math.random() * emails.length)],
      rsvp: Math.floor(20 + Math.random() * 200),
      date: new Date(2024, 0, 1 + Math.floor(Math.random() * 365)).toLocaleDateString()
    }));
  };

  const rows = generateSampleData();

  const columns = [
    { field: 'eventID', headerName: 'Event id', width: 160 },
    {field: 'organizerID', headerName: 'Oraganizer id', width: 160},
    { field: 'eventname', headerName: 'Event Name', width: 160 },
    { field: 'organizer', headerName: 'Organizer Name', width: 160 },
    { field: 'email', headerName: 'Email', width: 240 },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'rsvp', headerName: 'RSVP Slots', width: 160 },
    { field: 'date', headerName: 'Event Created', width: 160 }
    // Location field 
    // Participants
    // Time of event
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Completed': 'bg-blue-100 text-blue-800',
      'Cancelled': 'bg-red-100 text-red-800',
      'On Hold': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || '';
  };

  return (
    <>
    <div className='p-1 mx-6'>
        <PanelNav />
        
    </div>
    <div className="min-h-screen min-w-full bg-gray-50 p-4">
      {/* Main Content */}      
      <div style={{ height: 700, width: '90%', displayflex: 'flex', justifyContent: 'center', margin: 'auto' }}>
      <DataGrid rows={rows} columns={columns} />
      </div>
      
    </div>
    </>
  );
}