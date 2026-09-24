import React from 'react'
import "./headernitag.css"
import ikkinchi from '../images/ikkichirasm.jpg'
import rasm3 from '../images/yumaloq.png'
import rasm4 from '../images/uchburchak.png'
const headernitag = () => {
  return (
    <div className=' h-[1304px] bg-white'>
      <div className='justify-center w-[1081px] m-auto'
      >
        <h1 className='font-gilroy text-center text-black text-[60px]  pt-[160px]' >Crafting Your Dream Home with Precision & Care</h1>
        <p className='w-[1081px] text-black text-center text-[20px] mt-[16px]'>Renovating your home should be seamless and inspiring. At ICal Construction, we simplify the remodeling journey with our expert design-build approach. From concept to completion, our skilled team ensures every detail is handled with precision and care. With decades of experience, we specialize in creating stunning kitchens, luxurious bathrooms, and elegant home transformations. Let’s bring your vision to life—stress-free and beautifully executed.</p>
      </div>

      <div className="rasmuchun relative m-auto  mt-[87px]">

        <img className='w-[1280px] m-auto' src={ikkinchi} alt="" />
        <img className='absolute w-[227px] h-[227px] top-[230px] left-[650px]' src={rasm3} alt="" />
        <img className='absolute bottom-[269px] left-[745px]' src={rasm4} alt="" />
      </div>




    </div>
  )
}

export default headernitag