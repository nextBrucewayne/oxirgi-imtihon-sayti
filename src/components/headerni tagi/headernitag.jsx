import React from 'react'
import "./headernitag.css"
import ikkinchi from '../images/ikkichirasm.jpg'

const headernitag = () => {
  return (
    <div className='w-[1440px] h-[1200px] bg-white'>
      <div className='position: absolute justify-center left-[420px] top-[1100px] w-[1081px] h-[280px] bg-black'
      >
        <h1 className='font-gilroy text-[60px]' >Crafting Your Dream Home with Precision & Care</h1>
        <p>Renovating your home should be seamless and inspiring. At ICal Construction, we simplify the remodeling journey with our expert design-build approach. From concept to completion, our skilled team ensures every detail is handled with precision and care. With decades of experience, we specialize in creating stunning kitchens, luxurious bathrooms, and elegant home transformations. Let’s bring your vision to life—stress-free and beautifully executed.</p>
      </div>
      <img className='w-[1440px] h-[617px] position: absolute top-[1467px] left-[320px] ' src={ikkinchi} alt="" />





    </div>
  )
}

export default headernitag