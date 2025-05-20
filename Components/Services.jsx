import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='w-full h-full padding mt-12'>
        <div className='w-full h-full flex flex-col gap-4'>
            {/* Top */}
            <div className='flex flex-col gap-2 text-center'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline dark:text-foreground-dark text-foreground-light'>Explore Our Cutting-Edge<br className='hiden md:block'/> Automation Solutions</h1>
                <p className='text-sm dark:text-gray-dark text-gray-light'>we redefine convenience and security with our advanced automation services. Discover how our solutions can elevate your home or business.</p>
            </div>

            {/* Cards */}
            <ServicesCard />

            {/* Bottom */}
            <Link href='/' className='text-center'><Button>Learn More</Button></Link>
        </div>
    </div>
  )
}

export default Services