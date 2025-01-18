import React from 'react'
import video1 from '../assets/video1.mp4'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const Background = props => {
  if (props.playstatus === true) {
    return (
      <video
        className='fade-in h-screen w-full fixed left-0 right-0 top-0 bottom-0 -z-10 object-cover'
        autoPlay
        loop
        
      >
        <source src={video1} type='video/mp4' />
      </video>
    )
  } else if (props.heroCount === 0) {
    return <img className='fade-in h-screen w-full fixed left-0 right-0 top-0 bottom-0 -z-10 object-cover' src={image1} alt='' />
  } else if (props.heroCount === 1) {
    return <img className='fade-in h-screen w-full fixed left-0 right-0 top-0 bottom-0 -z-10 object-cover' src={image2} alt='' />
  } else if (props.heroCount === 2) return <img className='fade-in h-screen w-full fixed left-0 right-0 top-0 bottom-0 -z-10 object-cover' src={image3} alt='' />
}

export default Background
