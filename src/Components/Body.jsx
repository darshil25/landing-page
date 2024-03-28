import React from 'react'

const Body = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <img src="./public/assets/Blue-shape.svg" alt="1st" className='-rotate-[45deg] h-80'/>
        <img src="./public/assets/Purple-shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-80' />
        <img src="./public/assets/Pink-shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-80' />
        <img src="./public/assets/Hero-model.png" alt="model" className='absolute h-80' />
      </div>
      <div>
        <h1 className='text-5xl font-bold font-playfair'>Host your website in less than 5 minutes</h1>
        <p>Host your website effortlessly in under 5 minutes with Hosterr. Reliable, fast, and secure hosting solutions tailored to your needs.</p>
        <form action="">
          <input type="email" placeholder='enter E-mail address' />
          <button>Join Waitlist</button>
        </form>
        <div>
          <img src="./public/assets/Checkmark.svg" alt="check" />
          <p>No spam, Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body