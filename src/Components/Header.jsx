import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-center gap-2'>
        <img src="./public/assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white font-bol rounded-full text-sm px-2 py-1'>We are Hiring</button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  )
}

export default Header