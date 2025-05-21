import Link from 'next/link'
import React from 'react'


//Icons
import { IoMdArrowForward } from "react-icons/io";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='w-full h-full padding mt-12 bg-background-dark text-foreground-dark dark:bg-background-light dark:text-foreground-light py-8 rounded-tl-4xl rounded-tr-4xl'>
        <div className='w-full h-full flex flex-col items-center justify-between'>
            <div className='w-full h-full flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='w-full h-full flex flex-col gap-2'>
                  <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-headline'>Heard Enough?</h1>
                    <p className='font-headline'>Contact us today for more information or a free consultation.</p>  
                </div>
                <Link href='/' className='w-full h-full flex items-center justify-center gap-2 bg-secondary-dark dark:bg-secondary-light text-background-dark dark:text-background-light px-4 py-2 rounded-full text-2xl font-bold font-headline'>Contact Us <IoMdArrowForward /></Link>
            </div>
            <div className='w-full h-full flex items-center justify-center gap-4 my-12'>
                <a href="" target='_blank' className='border p-2 rounded-full'><FaFacebookF/></a>
                <a href="" target='_blank' className='border p-2 rounded-full'><FaWhatsapp /></a>
                <a href="" target='_blank' className='border p-2 rounded-full'><FaInstagram /></a>
                <a href="" target='_blank' className='border p-2 rounded-full'><FaXTwitter/></a>
                <a href="" target='_blank' className='border p-2 rounded-full'><FaTelegramPlane /></a>
            </div>
            <p className='text-sm text-gray-dark dark:text-gray-light'>© 2025 Patrionics — Secure. Smart. Seamless.</p>
        </div>
    </div>
  )
}

export default Footer