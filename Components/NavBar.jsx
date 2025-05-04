import React from 'react'


import Logo from './Logo'
import DarkModeToggle from './DarkModeToogle'
import Quote from './Quote'
import DesktopNav from './DesktopNav'

const NavBar = () => {
  return (
    <div className='padding z-50 fixed top-0 left-0 w-full h-[60px] backdrop-blur-md shadow dark:shadow-stone-900 dark:shadow-sm flex items-center justify-between'>
    {/* Left */}
    <Logo/>
    {/* Middle */}
    <DesktopNav/>
    {/* Right */}
        <div className='flex items-center gap-4'>
            <DarkModeToggle/>
            <Quote/> 
        </div>
    </div>
  )
}

export default NavBar