import Link from 'next/link'
import React from 'react'
import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <div className='w-full h-full padding bg-foreground-dark dark:bg-foreground-light mt-12 py-3 rounded-tl-2xl rounded-tr-2xl'>
        
        <div className='w-full h-full flex flex-col items-center gap-4 '>
          <h1 className='text-center text-sm font-headline font-light text-gray-light dark:text-gray-dark border border-gray-light dark:border-gray-dark p-2 rounded-full'>Projects</h1>

          <div className='w-full h-full flex flex-col items-center gap-4 lg:flex-row-reverse'>
            <div className='w-full h-full flex flex-col'>
              <div className='w-full h-full flex gap-2 items-center justify-center'>
                <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline'>Where</h2>
                <p className='text-xs text-gray-light dark:text-gray-dark'>Step into a world of intelligent systems designed to protect, automate, and elevate your lifestyle and business operations.</p>
              </div>
              <h2 className='text-center text-3xl md:text-5xl lg:text-6xl font-bold font-headline'>Security Meets Smart </h2>
              <div className='w-full h-full flex flex-row-reverse gap-2 items-center justify-center'>
                <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline'>Innovation</h2>
                <p className='text-xs text-gray-light dark:text-gray-dark'>We integrate security, comfort, and control into seamless, user-friendly experiences.</p>
              </div>
            </div>
          </div>
          
          {/* Right */}
          <ProjectList /> 
           
  
        </div>
        
    </div>
  )
}

export default Projects