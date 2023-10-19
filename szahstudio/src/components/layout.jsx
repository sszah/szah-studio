import React from 'react'

export default function Layout({ children }) {
  return (
    <div className='container h-full overflow-auto flex flex-col'>
      <nav className='w-full bg-[#d0d0d0] h-30 flex items-center justify-between'>
        <span className='hover:text-black text-lg md:text-2xl lg:text-2xl font-bold'>
          Simple Header
        </span>
        <div className='space-x-4'>
          <span className='hover:text-black' >Home</span>
          <span className='hover:text-black' >Features</span>
          <span className='hover:text-black' >Pricing</span>
          <span className='hover:text-black' >FAQs</span>
          <span className='hover:text-black' >About</span>
        </div>
      </nav>
      <div className='w-full h-full px-3 flex flex-col'>
        {children}
      </div>
    </div>  
  );
}
