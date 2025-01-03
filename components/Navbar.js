  import Link from 'next/link'
  import React from 'react'
  import { Search } from 'lucide-react';

  const Navbar = () => {
    return (
      <div className='bg-foreground mx-32 sticky top-0 z-10'>
        <div>
          <div className='flex gap-4 items-center justify-between'>
              <div className='main-logo flex items-center'>
                <img src="./MainLogo.png" alt="" className='h-[60px]'/>
                <Link className='text-2xl font-bold ml-2 text-secondary' href="/">GoRSVP</Link>
              </div>
              <div className='searchboxes rounded-md flex gap-3'>
                <div className=' flex bg-foreground border-2 border-secondary rounded-full'>
                  <button className='p-2 border-2 rounded-full bg-secondary text-footertext'><Search /></button>
                  <input className=' text-primary ml-3 rounded-full border-none focus:outline-none bg-inherit' type="text" placeholder='Search for Events' />
                </div>
                <button className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border-2 border-secondary hover:border-transparent rounded-full">
                <Link href="/signin">Sign In</Link>
                </button>
              </div>     
          </div>
        </div>
      </div>
    )
  }

  export default Navbar
