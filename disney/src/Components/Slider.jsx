import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const Slider = () => {
  const [movieList, setMovielist] = useState([])
  const apiKey = 'cb55a2068c4fb8b52eca7166da3b0595'
  const movieBaseUrl = 'https://api.themoviedb.org/3'
  const Img_base_url = 'https://image.tmdb.org/t/p/original'
  const screenWidth=window.innerWidth;
  const elementRef=useRef()
  const slideright=(element)=>{
    element.scrollLeft+=screenWidth-140
  }
  const slideleft=(element)=>{
    element.scrollLeft-=screenWidth-140
}
  useEffect(() => {
    fetch(
      `${movieBaseUrl}/trending/all/day?api_key=cb55a2068c4fb8b52eca7166da3b0595`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.results) // Access API response data
        setMovielist(res.results)
      })
      .catch(err => {
        console.error('Error fetching trending data:', err)
      })
  }, [])

  return (
    <div className='relative z-0'>
        <FaAngleLeft className='hidden sm:block text-white absolute top-[280px] left-12 text-3xl font-bold cursor-pointer '  onClick={()=>slideleft(elementRef.current)} />
        <FaAngleRight className='hidden sm:block text-white absolute top-[280px] right-12 text-3xl font-bold cursor-pointer' onClick={()=>slideright(elementRef.current)}/>
    <div className='flex p-20 pb-8   gap-10 sm:mt-30  overflow-x-auto '
    style={{
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none', /* Hide scrollbar in IE and Edge */
        scrollbarWidth: 'none', /* Hide scrollbar in Firefox */
      }} ref={elementRef}>
      {movieList.map((item,index) => (
        <img key={index} className='min-w-full sm:h-[450px]   object-cover object-top rounded-md hover:border-[5px] border-gray-500 duration-100 ease-in ' src={Img_base_url+item.backdrop_path} alt='incorrect utl'/>
      ))}
    </div>
    </div>
  )
  
}

export default Slider
