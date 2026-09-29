import React from 'react'
import "./Navbar.css"
import rasm1 from '../images/logo.png'
import ins from '../images/instagram.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <span>
                <img className='w-[100px] h-auto' src={rasm1} alt="" />
            </span>
            <ul className='flex items-center justify-center gap-[10px]'>
                <li><Link className='text-[11px]' to="/app">HOME</Link></li>
                <li><a className='text-[11px]' href="#">SERVICES</a></li>
                <li><Link className='text-[11px]' to="/Projects">KITCHEN SHOWROOM</Link></li>
                <li><Link className='text-[11px]' to="/Projects">GALLERY</Link></li>
                <li><a className='text-[11px]' href="#">TESTIMONIALS</a></li>
                <li><a className='text-[11px]' href="#">TRADES</a></li>
                <li><a className='text-[11px]' href="#">CONTACT US</a></li>
                <li><a className='text-[11px]' href="#">COVERAGE AREAS</a></li>
                <li><a className='text-[11px]' href="#">(805) 323-9515</a></li>
                <li><img className='w-[8px] h-[8px]' src={ins} alt="" /></li>
            </ul>
        </div>
    )
}

export default Navbar