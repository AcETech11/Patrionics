'use client';

import React from 'react';
import { motion } from 'framer-motion';
import whyUs from '../db/WhyUs';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

const WhyUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
    //   viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full h-full padding"
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <motion.div variants={cardVariants} className="w-full h-full flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline dark:text-foreground-dark text-foreground-light">
            Why Choose <br className="hidden md:block" /> Patrionics?
          </h1>
          <p className="text-sm dark:text-gray-dark text-gray-light">
            Experience the perfect blend of innovation, reliability, and tailored solutions—designed to protect and empower your space.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={containerVariants}
          className="w-full h-full grid xs:grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full h-full flex flex-col gap-2 p-4 bg-foreground-dark dark:bg-foreground-light rounded-md"
            >
              <div className="text-primary">{item.icon}</div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-headline">{item.title}</h1>
              <p className="text-sm dark:text-gray-dark text-gray-light">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
