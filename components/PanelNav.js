import React from 'react'
import Link from 'next/link';
import { 
    LayoutDashboard, 
    Users, 
    Calendar, 
    Ticket, 
    UserCog
  } from 'lucide-react';

const PanelNav = () => {
    const navItems = [
        { icon: <LayoutDashboard className="w-5 h-5" />, label: 'dashboard'},
        { icon: <Users className="w-5 h-5" />, label: 'users' },
        { icon: <UserCog className="w-5 h-5" />, label: 'organizers' },
        { icon: <Calendar className="w-5 h-5" />, label: 'events' }
      ];
  return (
      <div className='flex items-center justify-between'>
          
          <div className='flex gap-10'>
            <Link className='hover:underline text-secondary' href='./admin-dashboard'>{navItems[0].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-users'>{navItems[1].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-organizers'>{navItems[2].label}</Link>
            <Link className='hover:underline text-secondary' href='./admin-events'>{navItems[3].label}</Link>
          </div>
        </div>
  )
}

export default PanelNav
