import React from 'react'
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={Logo}
            alt="Logo" 
            className="w-20 h-auto"/>
          </a>
          <button className='btn btn-sm'>Connect With Me</button>
        </div>
      </div>
    </header>
  )
}

export default Header;