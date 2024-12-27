"use client"
import React from 'react';
import { useState } from 'react';
// Rest of your imports
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Ticket, 
  UserCog, 
  Menu, 
  X 
} from 'lucide-react';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { title: 'Total Users', value: '120', change: '12.6% from last month', icon: <Users className="w-6 h-6 text-red-800" /> },
    { title: 'Total Organizers', value: '30', change: '12.6% from last month', icon: <UserCog className="w-6 h-6 text-red-800" /> },
    { title: 'Total Event/Sessions', value: '40', change: '12.6% from last month', icon: <Calendar className="w-6 h-6 text-red-800" /> },
    { title: "Total RSVP's", value: '200', change: '12.6% from last month', icon: <Ticket className="w-6 h-6 text-red-800" /> }
  ];

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <Users className="w-5 h-5" />, label: 'Users' },
    { icon: <UserCog className="w-5 h-5" />, label: 'Organizers' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Events' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Open/Close Logic */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-64'
      }`}>

        {/* Brand Name */}
        <div className="h-full bg-red-800">
          <div className="p-4 bg-red-900 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">GoRSVP</h1>
              <p className="text-red-100">Admin Dashboard</p>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setSidebarOpen(false)}
              className="text-white p-2 hover:bg-red-700 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Render NavItems */}
          <nav className="mt-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`/${item.label}`}
                className={`flex items-center px-4 py-3 text-red-100 hover:bg-red-700 ${
                  item.active ? 'bg-red-600' : ''
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className={`${sidebarOpen ? 'sm:ml-64' : 'ml-0'}`}></div>
      <div className={`transition-margin duration-300 ${sidebarOpen ? 'sm:ml-64' : 'ml-0'}`}>
        <div className="p-8">
           {/* Hamburger and Main Header*/}
          <div className="flex items-center gap-4 mb-6">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg bg-red-800 text-white hover:bg-red-700"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          </div>
          
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
    </div>
  );
}