// import React, {  } from 'react'
import minion from '../assets/minion.jpg'
import { useRef, useState } from 'react'
import '../index.css'
const Main = () => {
  const [imgurl, setImgurl] = useState('/')
  const inputRef = useRef(null)

  async function imageGenrator (data) {
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image',
        {
          headers: {
            Authorization: 'Bearer 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'
          },
          method: 'POST',
          body: JSON.stringify({ inputs: data })
        }
      )
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const resultBlob = await response.blob()
      const imageUrl = URL.createObjectURL(resultBlob) // Convert blob to a usable URL

      console.log(imageUrl)
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Failed to generate the image. Please try again!')
    }
  }
  return (
    <div className='container'>
      <div className='heading'>Image Generator using React.js</div>
      <div className='image'>
        <img
          className='image-style'
          src={imgurl === '/' ? minion : imgurl}
          alt=''
        />
      </div>
      <div className='loading'>
        <div className='loading-bar-full'></div>
        <p>Generating image...Please be patient</p>
      </div>
      <div className='input'>
        <input ref={inputRef} type='text' placeholder='Enter prompt' />
        <div
          className='generate'
          onClick={() => {
            imageGenrator({ inputRef })
          }}
        >
          Generate
        </div>
      </div>
    </div>
  )
}
import '../index.css'
export default Main
