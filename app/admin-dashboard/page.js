"use client"
import React from 'react';
import PanelNav from '@/components/PanelNav';
import { LineChart } from '@mui/x-charts/LineChart';

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
  ];

  

  return (
    <>
    <div className='p-1 mx-6'>
    <PanelNav />
    </div>
    <div className="min-h-screen">
      {/* Main Content */}      
        <div className="p-8">
          {/* Render Main Content */}
          <div className="flex items-center justify-center gap-6">
          <LineChart className='bg-[rgb(249,248,240)] rounded-lg shadow-md'
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
          <div className='flex justify-center flex-wrap gap-3'>
          {stats.map((stat, index) => (
              <div key={index} className="p-6 w-1/2 bg-[rgb(249,248,240)] rounded-lg shadow-sm border border-gray-100">
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
    </>
  );
}

// Charts and Gauge