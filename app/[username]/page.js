import React from 'react'

const Username = ({params}) => {
  return (
    <div className='text-primary'>
      Hello {params.username}. You are signed in.
    </div>
  )
}

export default Username
