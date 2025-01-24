import React, { useState } from 'react'
import logo from '../assets/Images/logo.svg'
import { LuSearch } from 'react-icons/lu'
import { MdHomeFilled } from 'react-icons/md'
import { FiTv } from 'react-icons/fi'
import { BsTvFill } from 'react-icons/bs'
import { BiSolidCricketBall } from 'react-icons/bi'
import Navitem from './Navitem'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineStar } from 'react-icons/md'

const Navbar = () => {
  const menu = [
    {
      title: 'Search',
      image: LuSearch // Store the component reference
    },
    {
      title: 'Home',
      image: MdHomeFilled // Store the component reference
    },
    {
      title: 'TV',
      image: FiTv // Store the component reference
    },
    {
      title: 'Originals',
      image: MdOutlineStar // Store the component reference
    },
    {
      title: 'Movies',
      image: BsTvFill // Store the component reference
    },
    {
      title: 'Sports',
      image: BiSolidCricketBall // Store the component reference
    }
  ]

  const [toggle, setToggle] = useState(false)
  return (
    <div className='flex justify-between '>
      <div className='flex items-center gap-[60px] text-2xl '>
        <img
          className='w-[40px] sm:w-[60px] m-5  cursor-pointer '
          src={logo}
          alt=''
        />
        <div className='hidden sm:flex gap-10'>
          {menu.map(item => {
            return (
              <li className='list-none' key={Math.random()}>
                <Navitem name={item.title} Icon={item.image} />
              </li>
            )
          })}
        </div>
        <div className='flex sm:hidden gap-10'>
          {menu.map((item, index) => {
            return (
              index < 3 && (
                <li className='list-none' key={Math.random()}>
                  <Navitem Icon={item.image} />
                </li>
              )
            )
          })}
          <div className='sm:hidden relative ' onClick={()=>setToggle(!toggle)}>
            <Navitem name={''} Icon={BsThreeDotsVertical} />
            {toggle?<div className='absolute p-2 top-[40px]  border-2 bg-black text-xl'>
              {menu.map((item, index) => {
                return (
                  index >= 3 && (
                    <li className='list-none mb-[10px] ' key={Math.random()}>
                      <Navitem name={item.title} Icon={item.image} />
                    </li>
                  )
                )
              })}
            </div>:null}
          </div>
        </div>
      </div>
      <img
        className='sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] m-5 rounded-full'
        src='https://cdn.pixabay.com/photo/2023/04/10/18/53/ai-generated-7914474_1280.jpg'
        alt=''
      />
    </div>
  )
}

export default Navbar
