import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Hero from './components/Hero'

const App = () => {
  const herodata = [
    {
      text1: 'Drive Into the Future',
      text2: 'With PulseShift'
    },
    { text1: 'Redefining Mobility,', text2: 'One EV at a Time' },
    { text1: 'Driven by Purpose,', text2: ' Powered by Sustainability' }
  ]

  const [heroCount, setHeroCount] = useState(2)
  const [playstatus, setPlaystatus] = useState(false)

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((heroCount)=>heroCount===2?0:heroCount+1)
    }, 2000);
  },[])
  return (
    <div>
      <Background heroCount={heroCount} playstatus={playstatus} />
      <Navbar />
      <Hero
        herodata={herodata[heroCount]}
        heroCount={heroCount}
        playstatus={playstatus}
        setHeroCount={setHeroCount}
        setPlaystatus={setPlaystatus}
      />
    </div>
  )
}

export default App
