'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const Hero = () => {
  return (
    <div className='w-full h-[100vh] relative overflow-hidden'>
      <div className='w-full h-full flex items-center justify-center'>
        <motion.div
          className='text-center flex flex-col gap-2 z-10'
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline'>
            Transforming Spaces with<br className='hidden md:block' />
            Smart Automation Solutions
          </h1>
          <p className='text-sm dark:text-gray-dark text-gray-light px-3'>
          we specialize in innovative home and business automation solutions that enhance security and convenience.<br className='hidden md:block'/> Discover how our cutting-edge technology can streamline your daily operations and elevate your living experience.
          </p>
          <div className='mt-4'>
            <Link href='/'>
              <Button className='bg-primary-light dark:bg-primary-dark text-background-light dark:text-background-dark'>
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Images with Animation */}
        <motion.div
          className='w-[150px] h-[150px] absolute top-[20%] left-[10%] translate-x-[-50%] translate-y-[-50%]'
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <Image src='/hero.png' width={2000} height={2000} alt='Hero' />
        </motion.div>

        <motion.div
          className='w-[100px] h-[100px] md:h-[200px] md:w-[200px] absolute top-[20%] right-0 translate-x-[-10%] translate-y-[-50%]'
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <Image src='/hore 2.jpg' width={2000} height={2000} alt='Hero' />
        </motion.div>

        <motion.div
          className='w-[100px] h-[100px] md:h-[200px] md:w-[200px] absolute bottom-[20%] left-[10%] md:bottom-[15%] lg:bottom-[5%] translate-x-[-50%] translate-y-[-50%]'
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <Image src='/hero.jpg' width={2000} height={2000} alt='Hero' />
        </motion.div>

        <motion.div
          className='w-[100px] h-[100px] md:h-[200px] md:w-[200px] absolute bottom-[10%] md:bottom-[5%] lg:bottom-0 right-0 translate-x-[-10%] translate-y-[-50%]'
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
        >
          <Image src='/hero.jpg' width={2000} height={2000} alt='Hero' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
