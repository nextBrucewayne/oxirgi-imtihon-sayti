import React from 'react'
import "./OurservicesniTagi.css"
import b1rasm from "../images/1.png"
import b2rasm from "../images/2.png"
import b3rasm from "../images/3.png"

const OurservicesniTagi = () => {
    return (
        <div className='h-auto bg-white'>


            <div className="e1 text-center text-black pt-[160px]">
                <h1 className='text-[60px] text-regular'>
                    WHAT SETS WESTSIDE REMODELING APART?
                </h1>
                <p className='w-[641px] m-auto text-[20px] mt-[16px]'>Quality and affordability are an integral part of Focil’s design and construction. Whether we are building a custom residence.</p>
            </div>
            <div className="e2 flex justify-center align-center gap-[21px] mt-[85px]">
                <div className="quti relative  pt-[140px] pb-[98px] pl-[40px] pr-[40px] bg-[#FEC813]">
                    <img className='absolute top-[-49px] left-[45px]' src={b1rasm} alt="" />
                    <h2 className='text-[32px] text-black'>We Use a Proven System</h2>
                    <p className='w-[400px] text-black pt-[8px]'>Using checklists, policies, and procedures developed over the last 30+ years, we take a systematic approach to the entire remodeling process. From the initial phone call or showroom visit to the final inspection and walk through, you can rest assured that every aspect of the process will be taken care of professionally. </p>
                </div>
                <div className="quti relative  pt-[140px] pb-[98px] pl-[40px] pr-[40px] bg-[#FEC813]">
                    <img className='absolute top-[-49px] left-[45px]' src={b2rasm} alt="" />
                    <h2 className='text-[32px]   text-black'>We Customize Every Space </h2>
                    <p className='w-[387px] text-black pt-[8px]'>Our designs are personalized for you. We listen to your wants and needs and ask questions about how you and your family will use your new space. We educate and guide you through each step of the planning and selection process. The end result: attractive and functional spaces perfectly tailored to your taste and lifestyle.</p>
                </div>
                <div className="quti relative  pt-[140px] pb-[98px] pl-[40px] pr-[40px] bg-[#FEC813]">
                    <img className='absolute top-[-49px] left-[45px]' src={b3rasm} alt="" />
                    <h2 className='text-[32px] text-black'>We Keep You Safe and <br /> Comfortable </h2>
                    <p className='w-[400px] text-black pt-[8px]'>Our carpenters and trade contractors are highly professional and trustworthy. We take great care to protect your home while keeping our workspaces tidy, safe and secure. We are mindful of your family and pets and will go out of our way to make you as comfortable as possible during your remodel. </p>
                </div>
            </div>
            <div className="e3 text-center text-black mt-[160px] pb-[70px]">
                <h1 className='text-[60px] font-normal text-center'>Interactive Before & After Experience </h1>
                <p className='w-[950px] m-auto text-[19px] '>See the transformation for yourself! Use our dynamic slider to compare your space’s past and future—move the slider left to reveal the stunning new design or right to revisit the original layout.</p>
            </div>


        </div>
    )
}

export default OurservicesniTagi