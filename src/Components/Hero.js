import React from 'react'
// import image
import WomanImg from '../img/fas.jpg';
// import Link
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className=' h-[636px] bg-hero
    bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto mx-auto flex justify-around
      h-full'>
      {/* {text} */}
      <div className='flex flex-col justify-center'>
        {/* {pretitle} */}
        <div className='font-semibold flex items-center 
        uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
        </div>
        {/* {title} */}
        <h1 className='text-[70px] leading-[1.1] font-light
        mb-4'>
          AUTUMN SALE STYLISH <br/>
          <span className='font-semibold'>WOMENS</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold
        border-b-2 border-primary'>
          Discover More</Link>
      </div>
      {/* {image} */}
      <div className='hidden lg:block'>
        <img src={WomanImg} alt='' />
      </div>
      </div>
    </section>
  )
}
