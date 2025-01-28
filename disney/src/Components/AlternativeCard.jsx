import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const AlternativeCard = ({ id }) => { 
  const [list, setList] = useState([])
  const Img_base_url = 'https://image.tmdb.org/t/p/original'

  const slideright = element => {
    element.scrollLeft += screenWidth - 120
  }
  const slideleft = element => {
    element.scrollLeft -= screenWidth - 120
  }
  const elementRef = useRef()
  const screenWidth = window.innerWidth

  const getMovieWithGenreId = id => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=en-US&page=1&api_key=cb55a2068c4fb8b52eca7166da3b0595`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results.poster_path)

        setList(data.results)
      })
      .catch(err => {
        console.error('Error fetching movies by genre:', err)
      })
  }

  useEffect(() => {
    console.log('Genre ID:', id) // Log the ID to check if it's correct
    if (id) getMovieWithGenreId(id)
  }, [id])

  return (
    <div className='relative w-full'>
      <FaAngleLeft
        className='hidden sm:block text-white absolute top-[0px] left-0 text-3xl font-bold cursor-pointer z-90 '
        onClick={() => slideleft(elementRef.current)}
      />
      <FaAngleRight
        className='hidden sm:block text-white absolute top-[0px] right-0 text-3xl font-bold cursor-pointer z-90'
        onClick={() => slideright(elementRef.current)}
      />
      <div
        className='flex gap-4 overflow-x-auto scrollbar-none px-5 '
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none' /* Hide scrollbar in IE and Edge */,
          scrollbarWidth: 'none' /* Hide scrollbar in Firefox */
        }}
        ref={elementRef}
      >
        {list.length > 0 ? (
          list.map((movie, index) => (
            <div key={index} className='flex-shrink-0 '>
              <img
                src={
                  movie.poster_path
                    ? Img_base_url + movie.backdrop_path
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.title}
                className='w-[150px] sm:w-[300px] my-10 mb-1 rounded-lg hover:scale-105 transition-all ease-in-out p-1 hover:border-[5px] border-gray-400'
              />
              <h2 className='w-[150px] sm:w-[300px] text-white sm:text-2xl font-bolder'>
                {movie.title}
              </h2>
            </div>
          ))
        ) : (
          <p className=''>No movies available for this genre.</p>
        )}
      </div>
    </div>
  )
}
export default AlternativeCard
