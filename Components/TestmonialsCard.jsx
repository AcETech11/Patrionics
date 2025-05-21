'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

// For Sanity Image URL builder
import { urlFor } from '@/lib/sanity'; // adjust path as needed

const TestmonialsCard = ({ Review }) => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    arrows: false, 
  };

  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="w-full max-w-xl">
        <Slider {...settings} className="testimonial-slider">
          {Review.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out items-center">
                {/* Rating */}
                <p className="font-headline text-sm"> {item.rating}</p>

                {/* Comment */}
                <p className="text-md font-body text-gray-700 dark:text-gray-200">
                  {item.comment || 'No comment'}
                </p>

                {/* Services */}
                <div className="flex flex-wrap justify-center gap-2">
                  {item.services.map((service, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 dark:text-gray-300 border border-gray-400 dark:border-gray-600 py-1 px-3 rounded-full"
                    >
                      {service.name}
                    </span>
                  ))}
                </div>

                {/* Profile */}
                <div className="flex flex-col items-center gap-2 justify-center mt-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                    {item.imageUrl && (
                      <Image
                        src={urlFor(item.imageUrl).width(1200).height(800).url()}
                        alt={item.name || 'Testimonial'}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className='text-center'>
                    <h3 className="font-semibold text-lg font-headline">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestmonialsCard;
