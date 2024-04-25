import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaSquareInstagram, FaBars, FaXmark} from "react-icons/fa6";
import logocicle from '../assets/logocicle.png'
import campus_logo from '../assets/campus_logo.png'


const Navbar = () => {
    
    const[isMenuOpen, setIsMenuOpen]= useState(false);

    const toggleMenu= () => {
        setIsMenuOpen(!isMenuOpen);
    }
    //Navegação
    const navItems =[
        {path: "/", link: "Home"},
        {path: "/Depec", link: "Depec"},
        {path: "/Depet", link: "Depet"},
        {path: "/Depex", link: "Depex"},
        {path: "/Derint", link: "Derint"},
        
    ]



    return (
    <header className='bg-gray-100  text-black  top-0 left-0 right-0 relative z-40' >
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <div>
                <a href="/">
                    <img src={campus_logo} alt="logo" className="h-20" />
                </a>
            </div>
            
            {/* navitems for lg devices */}

            <ul className='md:flex gap-12 text-lg hidden '>
                {
                    navItems.map(({path, link}) => 
                    <li className='text-black' key={path}>
                    <NavLink
                    className={({ isActive, isPending }) =>
                    isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }   to={path}> {link} </NavLink> 

                    </li>)
                }
            </ul>

            {/* menuicons */}
            <div className='text-gray-400 lg:flex gap-4 items-center hidden'>
                <a href="https://m.facebook.com/100067209763113/" target="_blank" className='hover:text-blue-400'><FaFacebook/></a>
                <a href="https://www.instagram.com/direc_sh?igsh=MTkwaXVxdnNkOTJlbQ==" target="_blank" className='hover:text-blue-400'><FaSquareInstagram/></a>
            </div>
            {/* Barras do mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                    
                    </button>
            </div>

        </nav>


        {/* Menu items para mobile */}

        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-75": "hidden"} `}>
                {
                    navItems.map(({path, link}) => 
                    <li className='text-black' key={path}>
                    <NavLink onClick={toggleMenu} to={path}> {link} </NavLink> 
                    </li>)
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar