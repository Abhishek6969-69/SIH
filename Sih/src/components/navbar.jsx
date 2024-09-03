import React from 'react'
import logo from './asset/logo.png'; // Adjust the path based on your structure
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className=' flex items-center gap-5   p-3  bg-[#0D0A2C]  text-white'>
        <div className=' w-16  '>
            <img src={logo} alt='logo'  />
        </div>
        <div className=' flex'>
            <ul className=' flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Alumini Directory </Link></li>
                <li>Mentorship Program</li>
                <li><Link to="/chat">Discussion Forum</Link></li>
                <li>Carrer Guidence</li>
                <li>Event</li>
                <li>Placement Assistance</li>
                <li>About us</li>
              
            </ul>
        </div>
        <div className=' flex'>
           <button className=' mr-3'>login</button>
          
        </div>
    </div>
  )
}

export default Navbar