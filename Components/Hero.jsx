'use client'

import React from 'react'
import { delay, motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}
const imageAnimation = (x, y, rotate) => ({
  initial: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x,
    y,
    rotate,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
})

const Hero = () => {
  return (
    <div className='relative w-full h-[80vh] flex items-center justify-center overflow-hidden'>
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
            We deliver smart automation solutions that enhance security, simplify operations, and elevate your space.
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
        className="absolute w-[80px] sm:w-[100px] md:w-[150px] h-auto"
        style={{ top: '20%', left: '20%', transform: 'translate(-50%, -50%)' }}
        variants={imageAnimation(-100, -100, -15)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/hero.png"
          alt="Top Left Hero"
          width={200}
          height={200}
          className="object-contain"
        />
      </motion.div>

      {/* Top-right */}
      <motion.div
        className="absolute w-[80px] sm:w-[100px] md:w-[150px] h-auto"
        style={{ top: '20%', right: '20%', transform: 'translate(50%, -50%)' }}
        variants={imageAnimation(100, -100, 15)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/hore 2.jpg"
          alt="Top Right Hero"
          width={200}
          height={200}
          className="object-contain"
        />
      </motion.div>

      {/* Bottom-left */}
      <motion.div
        className="absolute w-[80px] sm:w-[100px] md:w-[150px] h-auto"
        style={{ bottom: '20%', left: '20%', transform: 'translate(-50%, 50%)' }}
        variants={imageAnimation(-100, 100, 10)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/hero.jpg"
          alt="Bottom Left Hero"
          width={200}
          height={200}
          className="object-contain"
        />
      </motion.div>

      {/* Bottom-right */}
      <motion.div
        className="absolute w-[80px] sm:w-[100px] md:w-[150px] h-auto"
        style={{ bottom: '20%', right: '20%', transform: 'translate(50%, 50%)' }}
        variants={imageAnimation(100, 100, -10)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/hero.jpg"
          alt="Bottom Right Hero"
          width={200}
          height={200}
          className="object-contain"
        />
      </motion.div>
      </div>
    </div>
  )
}

export default Hero


{/* <motion.div
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
          className='w-[100px] h-[100px] md:h-[200px] md:w-[200px] absolute bottom-[10%] left-[10%] md:bottom-[5%] lg:bottom-[5%] translate-x-[-50%] translate-y-[-50%]'
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
        </motion.div> */}
