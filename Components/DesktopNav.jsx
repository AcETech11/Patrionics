import navLinks from '@/db/NavLinks'
import Link from 'next/link'
import React from 'react'

const DesktopNav = () => {
  return (
    <div className='hidden md:flex'>
      <ul className='flex items-center gap-6'>
        {navLinks.map((link) => (
          <li key={link.id} className='hover:text-primary-light dark:hover:text-primary-dark'>
            <Link href={link.url} className='flex items-center flex-col gap-1'>
              <span className='text-sm'>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesktopNav