import React from 'react'
import '../header/Header.css'
import rasm1 from '../images/logo.png';
import ins from '../images/instagram.png'

const Header = () => {
    return (
        <div className="haeder w-[1440px] min-h-screen bg-cover bg-center bg-no-repeat">

            <div className="navbar">
                <span>
                    <img className='w-[100px] h-auto' src={rasm1} alt="" />
                </span>
                <ul className='flex items-center justify-center gap-[10px]'>
                    <button> <a className='text-[11px]' href="#">HOME</a></button>
                    <button> <a className='text-[11px]' href="#">SERVICES</a></button>
                    <button> <a className='text-[11px]' href="#">KITCHEN SHOWROOM</a></button>
                    <button> <a className='text-[11px]' href="#">GALLERY</a></button>
                    <button> <a className='text-[11px]' href="#">TESTIMONIALS</a></button>
                    <button> <a className='text-[11px]' href="#">TRADES</a></button>
                    <button> <a className='text-[11px]' href="#">CONTACT US</a></button>
                    <button> <a className='text-[11px]' href="#">COVERAGE AREAS</a></button>
                    <button> <a className='text-[11px]' href="#">(805) 323-9515</a></button>
                    <img className='w-[8px] h-[8px]' src={ins} alt="" />

                </ul>
            </div>

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