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
        { icon: <LayoutDashboard className="w-5 h-5" />, label: 'admin-dashboard'},
        { icon: <Users className="w-5 h-5" />, label: 'admin-users' },
        { icon: <UserCog className="w-5 h-5" />, label: 'admin-organizers' },
        { icon: <Calendar className="w-5 h-5" />, label: 'admin-events' }
      ];
  return (
      <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center justify-between'>
              <div className='main-logo flex items-center'>
                <img src="./MainLogo.png" alt="" className='h-[50px]'/>
                <Link className='text-xl font-bold ml-2 text-secondary' href="/">GoRSVP</Link>
              </div>     
          </div>
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
