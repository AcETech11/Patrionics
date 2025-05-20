import Link from 'next/link'
import React from 'react'
import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <div className='w-full h-full padding bg-primary-light dark:bg-primary-dark mt-12 py-3'>
        <div className='w-full h-full flex flex-col gap-4'>
            {/* Top */}
            <div className='flex flex-col gap-2 text-center'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline text-foreground-dark '>See Our Systems in Action</h1>
                <p className='text-sm text-foreground-dark'>Explore real-world installations showcasing our expertise in security and automation solutions for homes and businesses.</p>
                <Link href='/' className='text-sm font-headline font-light bg-secondary-light dark:bg-primary-dark text-background-light dark:text-background-dark p-1.5 rounded-md'>View More Projects</Link>
            </div>
            {/* Bottom */}
            <ProjectList />

        </div>
        
    </div>
  )
}

export default Projects