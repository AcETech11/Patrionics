import React from 'react'


import Logo from './Logo'
import DarkModeToggle from './DarkModeToogle'
import Quote from './Quote'

const NavBar = () => {
  return (
    <div className='padding'>
    {/* Left */}
    <Logo/>
    {/* Middle */}

    {/* Right */}
        <div>
            <DarkModeToggle/>
            <Quote/>
        </div>
    </div>
  )
}

export default NavBar