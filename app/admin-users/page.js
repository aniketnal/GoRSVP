"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
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
      UserID: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      firstname: firstnames[Math.floor(Math.random() * firstnames.length)],
      lastname: lastnames[Math.floor(Math.random() * lastnames.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      email: emails[Math.floor(Math.random() * emails.length)],
      rsvp: Math.floor(0 + Math.random() * 100),
      date: new Date(2024, 0, 1 + Math.floor(Math.random() * 365)).toLocaleDateString()
    }));
  };

  const rows = generateSampleData();

  const columns = [
    { field: 'UserID', headerName: 'User id', width: 180 },
    { field: 'firstname', headerName: 'First Name', width: 180 },
    { field: 'lastname', headerName: 'Last Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 180 },
    { field: 'email', headerName: 'Email', width: 240 },
    { field: 'rsvp', headerName: 'RSVP\'s', width: 180 },
    { field: 'date', headerName: 'Account Created', width: 180 }
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
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center justify-between'>
              <div className='main-logo flex items-center'>
                <img src="./MainLogo.png" alt="" className='h-[50px]'/>
                <Link className='text-xl font-bold ml-2 text-secondary' href="/">GoRSVP</Link>
              </div>     
          </div>
          <div className='flex gap-10'>
            <Link className='hover:underline text-secondary' href='./admin-dashboard'>{navItems[0].label}</Link>
            <Link className='underline text-secondary' href='./admin-users'>{navItems[1].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-organizers'>{navItems[2].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-events'>{navItems[3].label}</Link>
          </div>
        </div>
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