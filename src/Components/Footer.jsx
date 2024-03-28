import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-4 font-lato text-gray-500 '>
        <li className='hover:text-gray-700'>
          <a href="#">Facebook</a>
        </li>
        <li className='hover:text-gray-700'>
          <a href="#">Instagram</a>
        </li>
        <li className='hover:text-gray-700'>
          <a href="#">Twitter(X)</a>
        </li>
        <li className='hover:text-gray-700'>
          <a href="#">LinkedIn</a>
        </li>
      </ul>

      <div className='flex gap-2'>
        <img src="./public/assets/Help-Avatar.svg" alt="helpAvt" />
        <div>
          <p className='font-playfair font-thin'>Do You have any Questions?</p>
          <a href="#" className='font-lato font-[550]'>Talk to our Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer