'use client';
import React from 'react';
import Quote from './Quote';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="w-full h-full padding mt-12">
      <motion.div
        className="w-full h-full bg-gradient-to-br from-[#E0F7FA] to-[#E0F2FE] px-4 py-12 text-center rounded-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        //viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Secure Your Property?
        </h1>
        <p className="text-gray-600 mb-6">
          Get started today and experience peace of mind with our cutting-edge security solutions.
        </p>
        <Quote />
      </motion.div>
    </div>
  );
};

export default CTA;
