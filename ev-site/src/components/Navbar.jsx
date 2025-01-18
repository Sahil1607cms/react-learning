import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-10 flex items-center justify-between px-5 py-5 m-10 text-white overflow-hidden'>
      <h1 className='text-5xl font-bold'>PulseShift</h1>
      <ul className='flex items-center gap-10 mr-20 text-xl'>
        <li className='hover:underline'>Home</li>
        <li className='hover:underline'>About us</li>
        <li className='text-black hover:underline 
         bg-white rounded-[40px] px-2 py-1'>Contact </li>
      </ul>
    </div>
  )
}

export default Navbar
