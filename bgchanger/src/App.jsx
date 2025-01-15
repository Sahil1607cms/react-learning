import React from 'react'
import { useState } from 'react'


const App = () => {
  const [color,setColor]=useState('green')

  const style={
    backgroundColor:{color}
  }
  return (
    <div className="w-screen h-screen " style={{backgroundColor:color}}>
      <div className=" flex flex-wrap justify-center w-full p-3 fixed bg-white sm:min-h-[50px] min-h-[120px] bottom-10 shadow-2xl">
        <div className='  flex flex-wrap item-center justify-center w-full max-w-2xl  gap-3 sm:h-12 h-28 shadow-lg rounded-3xl'>
        <button className="px-3 rounded-3xl mt-1 min-w-[100px] p-2 border-2 h-10 bg-red-500 text-black"
         onClick={()=>setColor('red')}>red</button>
        <button className="px-3 rounded-3xl mt-1 min-w-[100px] w-[] p-2 border-2 h-10 bg-green-500 text-black"
         onClick={()=>setColor('green')}>green</button>
         <button className="px-3 rounded-3xl mt-1 min-w-[100px] w-[] p-2 border-2 h-10 bg-blue-500 text-black"
         onClick={()=>setColor('blue')}>blue</button>
        </div>

      </div>
      
    </div>
  )
}

export default App
