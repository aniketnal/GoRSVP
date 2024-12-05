import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex gap-4'>
            <Link href="/signin"><li>Sign In</li></Link>
            <Link href="/createevent"><li>Create Event</li></Link>
            <Link href="/signup"><li>Sign Up</li></Link>
            <Link href="/"><li>EventOrganizer</li></Link>
            <Link href="/"><li>Admin Panel</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
