import React from 'react'
import "./Footer.css"
import facebok from "../images/facebok.png"
import twitter from "../images/twitter.png"
import instagran from "../images/instagram1.png"
import youtube from "../images/youtube.png"
import nominibilmadm from "../images/nominibilmadm.png"


const Footer = () => {
    return (
        <div className=' h-auto bg-[#FEC813] pt-[130px] pb-[70px]'>


            <div className="div1 flex text-black justify-center align-center">
                <div className="d1">
                    <h1 className='text-[85px]'>Let's work <br />
                        together</h1>
                    <p className='w-[546px] mt-[50px]'>Call or fill out the form to learn more about ICal <br /> Construction’s expert remodeling services. <br />
                        You’re also welcome to visit our showroom by appointment <br /> and explore our premium materials in person!

                    </p>
                </div>
                <div className="d2 mt-[60px] relative">
                    <span className='flex gap-[16px]'>
                        <input className='w-[412px] h-[50px] border-b border-black' type="text" placeholder='Phone number' />
                        <input className='w-[412px] h-[50px] border-b border-black' type="text" placeholder='Full name' />
                    </span>
                    <br />
                    <input className='w-[842px] h-[50px] border-b border-black' type="text" placeholder='Describe your project' />

                    <button className='absolute top-[170px] right-[0px] bg-black pt-[20px] pb-[20px] pl-[96px] pr-[96px] text-[#FEC813]' >SUBMIT</button>
                </div>
            </div>


            <div className="div2 flex justify-around mt-[250px] ">
                <div className="d2_1 mt-[56px]">
                    <h3 className='text-black'>Focil Construction Inc <br />
                        LIC #1022003</h3>
                    <h4 className='text-black mt-[56px]' >© 2025 | Kitchen Showroom & Design Studio</h4>
                </div>
                <div className="d2_2 flex text-black gap-[150px]">
                    <ul>
                        <li>Address</li>
                        <li className='mt-[14px]'>2636 Conejo Center Drive <br />
                            Thousand Oaks, CA 91320</li>
                    </ul>
                    <ul>
                        <li>Call Us On</li>
                        <li className='mt-[14px]'>(805) 405-9225</li>
                    </ul>
                    <span>
                        <p>Follow Us On</p>
                        <ul className='mt-[14px] flex gap-[25px]' >
                            <img className='size-[16px]' src={facebok} alt="" />
                            <img className='size-[16px]' src={twitter} alt="" />
                            <img className='size-[16px]' src={instagran} alt="" />
                            <img className='size-[16px]' src={youtube} alt="" />
                            <img className='size-[16px]' src={nominibilmadm} alt="" />
                        </ul>
                    </span>
                </div>
            </div>


        </div >

    )
}

export default Footer