  import Link from 'next/link'
  import React from 'react'
  import { Search } from 'lucide-react';

  const Navbar = () => {
    return (
      <div className='p-1 mx-6'>
        <nav>
          <ul className='flex gap-4 items-center justify-between'>
              <div className='main-logo flex items-center'>
                <img src="./MainLogo.png" alt="" className='h-[50px]'/>
                <Link className='text-xl font-bold ml-2 text-secondary' href="/">GoRSVP</Link>
              </div>
              <div className='searchboxes rounded-md flex gap-3'>
                <div className=' flex border bg-white border-slate-300 rounded-md'>
                  <input className='ml-3 border-none focus:outline-none' type="text" placeholder='Search for Events' />
                  <button className='p-2 rounded-e bg-primary text-white'><Search /></button>
                </div>
                <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded-full">
                <Link href="/signin">Sign In</Link>
                </button>
                <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded-full">
                <Link href="/signup">Sign Up</Link>
                </button>
              </div>     
          </ul>
        </nav>
      </div>
    )
  }

  export default Navbar
