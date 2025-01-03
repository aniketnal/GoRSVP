"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
// Rest of your imports
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Ticket, 
  UserCog
} from 'lucide-react';

export default function DashboardLayout() {

  const stats = [
    { title: 'Total Users', value: '120', change: '12.6% from last month', icon: <Users className="w-6 h-6 text-red-800" /> },
    { title: 'Total Organizers', value: '30', change: '12.6% from last month', icon: <UserCog className="w-6 h-6 text-red-800" /> },
    { title: 'Total Event/Sessions', value: '40', change: '12.6% from last month', icon: <Calendar className="w-6 h-6 text-red-800" /> },
    { title: "Total RSVP's", value: '200', change: '12.6% from last month', icon: <Ticket className="w-6 h-6 text-red-800" /> }
  ];

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'admin-dashboard', active: true },
    { icon: <Users className="w-5 h-5" />, label: 'admin-users' },
    { icon: <UserCog className="w-5 h-5" />, label: 'admin-organizers' },
    { icon: <Calendar className="w-5 h-5" />, label: 'admin-events' }
  ];

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
            <Link className='underline text-secondary' href='./admin-dashboard'>{navItems[0].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-users'>{navItems[1].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-organizers'>{navItems[2].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-events'>{navItems[3].label}</Link>
          </div>
        </div>
    </div>
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}      
        <div className="p-8">
          {/* Render Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 mb-1">{stat.title}</p>
                    <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
                    <p className="text-green-500 text-sm mt-1">{stat.change}</p>
                  </div>
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </div>
    </>
  );
}

// Charts and Gauge