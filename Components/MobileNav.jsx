import Link from 'next/link'
import React from 'react'
import navLinks from '../db/NavLinks'

const MobileNav = () => {
  return (
    <nav className='w-full  md:hidden padding fixed bottom-0 left-0 backdrop-blur-md shadow z-50 bg-background-dark dark:bg-background-light dark:text-foreground-light text-foreground-dark rounded-tl-xl rounded-tr-xl'>
      <ul className='w-full h-full flex items-center justify-between gap-4 py-4'>
        {navLinks.map((link) => (
          <li key={link.id} className='w-full h-full flex items-center justify-center  dark:hover:text-primary-light hover:text-primary-dark'>
            <Link href={link.url} className='flex items-center flex-col gap-1'>
              {link.icon}
              <span className='text-xs italic'>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNav
