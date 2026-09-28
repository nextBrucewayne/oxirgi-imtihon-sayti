import React from 'react'
import '../header/Header.css'
import rasm1 from '../images/logo.png';
import ins from '../images/instagram.png'
import Navbar from '../navbar/Navbar';

const Header = () => {
    return (
        <div className="haeder w-[1440px] min-h-screen bg-cover bg-center bg-no-repeat">

            <Navbar />

            <div className="head pt-[242px] pl-[137px] pb-[307px]">
                <h1 className='text-[40px] w-[700px]'>Transforming Homes with Superior Craftsmanship & Timeless Design</h1>
                <p className='w-[550px] mb-[20px]'>Bringing elegance, durability, and expert craftsmanship to your kitchen, bathroom, and beyond with premium materials and seamless remodeling.</p>

                <span className='flex gap-[10px]'>
                    <button className='w-[251px] h-[64px] bg-[#FEC813] text-[#000]' >About US</button>
                    <button className=' button2 w-[251px] h-[64px]' >Contact us</button>
                </span>



            </div>

        </div >
    )
}

export default Header