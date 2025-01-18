import React from 'react'
import pause_icon from '../assets/pause_icon.png'
import play_icon from '../assets/play_icon.png'

const Hero = props => {
  return (
    <div className=' mt-60 ml-10 p-5 w-full'>
      <div className='text-white text-5xl  font-bold'>
        <p>{props.herodata.text1}</p>
        <p>{props.herodata.text2}</p>
      </div>
      <div>
        <ul className='list-disc flex clicked gap-[2px] '>
          <li
            onClick={() => props.setHeroCount(0)}
            className={props.heroCount === 0 ? 'orange' : 'white'}
          ></li>
          <li
            onClick={() => props.setHeroCount(1)}
            className={props.heroCount === 1 ? 'orange' : 'white'}
          ></li>
          <li
             onClick={() => props.setHeroCount(2)}
            className={props.heroCount === 2 ? 'orange' : 'white'}
          ></li>
        </ul>
      </div>
      <div className="hero-play">
        <img onClick={()=>props.setPlaystatus(!props.playstatus)} className='h-[80px] w-[80px]' src={props.playstatus?pause_icon:play_icon} alt="" />
      </div>
    </div>
  )
}

export default Hero
