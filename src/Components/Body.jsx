import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src="./public/assets/Blue-shape.svg" alt="1st" className='-rotate-[45deg] h-80 md:h-96 lg:h-[450px]'/>
        <img src="./public/assets/Purple-shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-80 md:h-96 lg:h-[450px]' />
        <img src="./public/assets/Pink-shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-80 md:h-96 lg:h-[450px]' />
        <img src="./public/assets/Hero-model.png" alt="model" className='absolute h-80 md:h-96 lg:h-[450px]' />
      </div>

      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='font-lato text-gray-500'>Host your website effortlessly in under 5 minutes with Hosterr. Reliable, fast, and secure hosting solutions tailored to your needs.</p>

        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder='enter E-mail address' className='rounded-md px-4 py-3 placeholder:text-gray-400 md:w-[225]'/>
          <button className='rounded-md bg-blue-400 hover:bg-blue-600 px-4 py-2'>Join Waitlist</button>
        </form>

        <div className='flex gap-2 pt-4'>
          <img src="./public/assets/Checkmark.svg" alt="check" />
          <p className='font-lato text-gray-500'>No spam, Unsubscribe anytime</p>
        </div>

      </div>
    </div>
  )
}

export default Body