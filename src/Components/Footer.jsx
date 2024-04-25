import { FaFacebook, FaInstagram } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-center w-full relative py-4'>
        <ul className='flex justify-center list-none  mt-3 p-1'>
            <li className=' m-2 hover: text-blue-400'> <a href="https://m.facebook.com/100067209763113/" target="_blank" className='hover:text-blue-400'><FaFacebook/></a></li>
            <li className='  m-2 hover: text-blue-400'><a href="https://www.instagram.com/direc_sh?igsh=MTkwaXVxdnNkOTJlbQ==" target="_blank" className='hover:text-blue-400'><FaInstagram/></a></li>
        </ul>

    <p className='m-2'>
        <span className=' font-bold text-white m-2'> Diretoria de Relações Empresariais e Comunitárias</span>
        <br/>
        <br/>
        <span className='font-bold text-white m-2'>Direc &copy; 2023</span> 
    </p>




    </footer>
  )
}

export default Footer