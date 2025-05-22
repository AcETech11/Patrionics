'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

// Icons
import { IoMdArrowForward } from "react-icons/io"
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Footer = () => {
  return (
    <motion.div
      className='w-full h-full mt-12 bg-foreground-dark dark:bg-foreground-light pt-12 pb-22 padding rounded-tl-3xl rounded-tr-3xl'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className='w-full flex flex-col justify-center gap-6'>
        {/* Headline */}
        <motion.div
          className='flex flex-col gap-4 text-center md:text-left'
          variants={fadeInUp}
        >
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight'>
            Your space<br />deserves smarter<br />protection.
          </h1>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-accents-light dark:text-accents-dark underline'>
            let’s secure it together.
          </h2>
          <div className='flex justify-end mt-4'>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href='/'>
                <IoMdArrowForward className='h-16 w-16 md:h-20 md:w-20 bg-primary-light dark:bg-primary-dark text-foreground-light dark:text-foreground-dark rounded-full p-4 hover:bg-accents-dark dark:hover:bg-accents-light transition-all duration-300' />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <hr className='bg-gray-light dark:bg-gray-dark my-6' />

        {/* Subtext & Socials */}
        <motion.div className='flex flex-col md:flex-row gap-4' variants={fadeInUp}>
          <p className='text-sm text-gray-light md:w-1/2 dark:text-gray-dark text-center md:text-left'>
            From smart locks to surveillance systems, Patrionics delivers intelligent security solutions tailored to your home or business. Start your journey to a safer space today.
          </p>

          <div className='flex items-center justify-center md:w-1/2 md:justify-end gap-4 flex-wrap'>
            {[
              { icon: <FaFacebookF />, link: '/', bg: 'primary-dark' },
              { icon: <FaInstagram />, link: '/', bg: '#E1306C' },
              { icon: <FaTelegramPlane />, link: '/', bg: 'primary-dark' },
              { icon: <FaXTwitter />, link: '/', bg: 'background-dark' },
              { icon: <FaWhatsapp />, link: '/', bg: 'accents-light' },
            ].map(({ icon, link, bg }, i) => (
              <motion.a
                key={i}
                href={link}
                target='_blank'
                whileHover={{ scale: 1.2 }}
                className={`border border-gray-light dark:border-gray-dark p-3 rounded-full transition-all duration-300 hover:bg-[${bg}] dark:hover:bg-[${bg}]`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className='text-sm text-gray-light dark:text-gray-dark text-center mt-6'
          variants={fadeInUp}
        >
          © 2025 Patrionics — Secure. Smart. Seamless.
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Footer
