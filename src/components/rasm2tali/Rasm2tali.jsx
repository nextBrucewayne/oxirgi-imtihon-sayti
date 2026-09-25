import React from 'react'
import "./Rasm2tali.css"
import ras1 from "../images/rasmd1.png"
import ras2 from "../images/nuqtaimg.png"
import ras3 from "../images/rasmd2.png"
import ras4 from "../images/nuqta.png"
const Rasm2tali = () => {
    return (
        <div className='flex justify-center relative align-center gap-[10px] bg-white'>

            <img className='w-[765px] h-[700px]' src={ras1} alt="" />
            <img className='size-[64px] absolute top-[340px] left-[738px] ' src={ras2} alt="" />
            <img className='w-[765px] h-[700px] ' src={ras3} alt="" />

        </div>
    )
}

export default Rasm2tali