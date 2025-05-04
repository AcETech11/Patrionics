import  Link  from 'next/link'
import React from 'react'
import { Button } from './ui/button'

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,

} from '@clerk/nextjs'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-full mt-[80px] flex flex-col items-center justify-center gap-4'>
        <div className='padding w-full h-full flex flex-col items-center justify-center gap-8'> 
            <div className='text-center'>
                <h1 className='font-extrabold font-headline mb-2 text-3xl md:text-4xl lg:text-5xl'>Transforming <span className='dark:text-accents-dark text-accents-light font-light'>Spaces</span> with Smart<br className='hidden md:block'/> Automation <span className='dark:text-accents-dark text-accents-light font-light'>Solutions</span></h1>
                <p className='text-muted-foreground italic '> We specialize in innovative home and business automation solutions that enhance security and convenience. Discover how our cutting-edge technology can streamline your daily operations and elevate your living experience.</p>
            </div>
            <div className='w-full h-full flex items-center justify-center gap-4'>
                <Link href='/'>
                    <Button className=' border dark:border-border-dark border-border-light'>Get Started</Button>
                </Link>
                <SignedOut>
                    <SignInButton mode="modal" ><Button className='bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light text-foreground-dark'>Sign In</Button></SignInButton>
                </SignedOut>
                <SignedIn>
                    <SignOutButton ><button className="bg-gray-light dark:bg-gray-dark text-white px-4 py-1.5 rounded"> Sign Out</button>
       </SignOutButton>
                </SignedIn>
            </div>
        </div>
        <div>
            <Image 
            src='/hero.jpg' 
            alt='hero' 
            width={500} 
            height={500} />
        </div>
    </div>
  )
}

export default Hero