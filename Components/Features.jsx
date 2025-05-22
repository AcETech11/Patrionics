'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { SignInButton } from '@clerk/nextjs'

// Icons
import { FaUnlockKeyhole } from "react-icons/fa6"
import { RiCalendarScheduleLine } from "react-icons/ri"
import { BsDoorOpenFill } from "react-icons/bs"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Features = () => {
  return (
    <div className='padding w-full h-full'>
      <motion.div
        className='w-full h-full flex items-center justify-center flex-col gap-2'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h1
          className='text-sm font-headline font-light text-gray-light dark:text-gray-dark border border-gray-light dark:border-gray-dark p-1.5 rounded-full'
          variants={item}
        >
          What We Offer
        </motion.h1>

        <motion.h2
          className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline dark:text-foreground-dark text-foreground-light text-center'
          variants={item}
        >
          Intelligent Automation for <br className='hidden md:block'/> Every Space
        </motion.h2>

        {/* Grid Cards */}
        <motion.div
          className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'
          variants={container}
        >
          {[{
            icon: <FaUnlockKeyhole className='text-4xl  bg-secondary-light dark:bg-secondary-dark rounded-full p-2 text-background-light dark:text-background-dark' />,
            title: 'Secure Your Space with Our Advanced Access Control Systems',
            text: 'Our access control solutions ensure safety and convenience for your property.',
            action: <Link href='/'><Button className='bg-primary-light dark:bg-primary-dark'>Learn More</Button></Link>
          }, {
            icon: <RiCalendarScheduleLine className='text-4xl  bg-secondary-light dark:bg-secondary-dark rounded-full p-2 text-background-light dark:text-background-dark' />,
            title: 'Streamline Workforce Management with Time and Attendance Solutions',
            text: 'Track employee hours effortlessly with our innovative time and attendance systems.',
            action: <SignInButton mode="modal" className='font-headline text-primary-light dark:text-primary-dark'>Sign In</SignInButton>
          }, {
            icon: <BsDoorOpenFill className='text-4xl  bg-secondary-light dark:bg-secondary-dark rounded-full p-2 text-background-light dark:text-background-dark' />,
            title: 'Enhance Guest Experience with Our Hotel Door Lock Solutions',
            text: 'Upgrade your hospitality offering with secure, keyless, and modern access systems.',
            action: <Link href='/'><Button className='bg-primary-light dark:bg-primary-dark'>Learn More</Button></Link>
          }].map((feature, i) => (
            <motion.div
              key={i}
              className=' flex flex-col gap-2 border py-4 px-4 rounded-md shadow dark:shadow'
              variants={item}
            >
              {feature.icon}
              <h3 className='text-xl font-bold'>{feature.title}</h3>
              <p>{feature.text}</p>
              {feature.action}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Features
