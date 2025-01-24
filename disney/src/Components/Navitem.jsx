import React from 'react'

const Navitem = ({ name, Icon }) => {
  return (
    <div className='text-white' >
      <div className='flex items-center gap-4 cursor-pointer hover:underline underline-offset-8 '>
        <Icon />
        <h2 className=' sm:inline'>{name}</h2>
      </div>
    </div>
  )
}

export default Navitem
