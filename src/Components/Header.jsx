import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-center gap-2'>
        <img src="./public/assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 transition-all duration-500 text-white font-bol rounded-full text-sm px-2 py-1'>We are Hiring </button>
      </div>

      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-500 gap-6'>
        <li className='hover:text-gray-700'>
          <a href="#">Plans</a>
        </li>
        <li className='hover:text-gray-700'>
          <a href="#">Find Domain</a>
        </li>
        <li className='hover:text-gray-700'>
          <a href="#">Why Hosterr</a>
        </li>
      </ul>

      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a href="#" className='text-gray-500 hover:text-gray-700'>Sign In</a>
        <button className='rounded-md bg-blue-400 hover:bg-blue-600 px-4 py-2'>Join Waitlist</button>
      </div>

      <div className='lg:hidden'>
        <FaBars />
      </div>
    </div>
  )
}

export default Header