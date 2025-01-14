import React from 'react'

const [color,setColor]=useState('red');

const App = () => {
  return (
    <div className="wi-full h-screen ">
      <div className=" flex justify-center gap-[30px] p-3 fixed bg-red-500 min-h-[50px] bottom-10 inset-x-0 shadow-2xl">
        <button className="text-white rounded-md p-2 border-2">red</button>
        <button onClick={setColor(green)}>green</button>
          <div ></div>
      </div>
      
    </div>
  )
}

export default App
