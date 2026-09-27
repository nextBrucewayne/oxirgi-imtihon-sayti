import React from 'react'
import "./Ourservices.css"
import cardrasm from '../images/cardrasm.jpg'
const Ourservices = () => {
    return (
        <div className=' h-[1210px] bg-[#FFFAEA]'>

            <div className="boshi pt-[80px] w-[700px] m-auto ">
                <h1 className=' text-black text-center text-[60px]'>Our services</h1>
                <p className='w-[680px] mt-[16px] text-black text-center text-[20px]'>Quality and affordability are an integral part of Focil’s design and construction. Whether we are building a custom residence.</p>
            </div>

            <div className="cards1 flex align-center justify-center gap-[20px] mt-[56px] mb-[56px]">
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
            </div>

            <div className="cards2 flex align-center justify-center gap-[20px]">
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
                <div className="card">
                    <img className='w-[350px] h-[265px]' src={cardrasm} alt="" />
                    <h2 className='text-black text-[32px] mt-[23px]'>Our Services</h2>
                    <p className='text-black w-[350px]'>Quality and affordability are an integral part of <br /> Focil’s design and</p>
                </div>
            </div>



        </div>
    )
}

export default Ourservices