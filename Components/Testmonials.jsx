import React from 'react'
import TestmonialsList from './TestmonialsList'
import Review from './Review'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
const Testmonials = () => {
  return (
    <div className='w-full h-[100vh] padding mt-12'>
      <div className='w-full h-full flex flex-col items-center justify-center  gap-4 lg:flex-row'>
        {/* LEFT */}
        <div className='w-full h-full flex flex-col  justify-center gap-4'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline'>What Our Clients Are <br className='hidden md:block'/> Saying</h2>
          <p >Trusted by businesses and homeowners across Nigeria</p>
          <p className='text-sm text-gray-light dark:text-gray-dark'>here’s what they think about working with Patrionics.</p>
          <div>
            <SignedOut>
              <SignInButton mode="modal">Sign In To Leave a Review</SignInButton>
            </SignedOut>
            <SignedIn>
              <Review/>
            </SignedIn>
          </div>
        </div>
        {/* RIGHT */}
          <TestmonialsList />
        
      </div>
    </div>
  )
}

export default Testmonials