import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
       <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl '>Bro 😎 </span></h1>
       <button className='bg-red-600 text-lg text-white font-medium px-3 py-3 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
