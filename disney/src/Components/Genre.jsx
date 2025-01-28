import React, { useDeferredValue, useEffect, useState } from 'react'
import MovieListCard from './MovieListCard'
import AlternativeCard from './AlternativeCard'
 
const Genre = () => {
  
  const generes = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]
  
  
  return (
    <div>
      {generes.map((item, index) => index<=4&&(
        <div key={index} className='p-5 sm:px-14'>
        <h2 className='text-white text-3xl p-5  font-bold'>{item.name}</h2>        
        {index%2!=0?<MovieListCard id={item.id}/>:<AlternativeCard id={item.id}/>}
        </div>
      ))}
    </div>
  )
}

export default Genre
