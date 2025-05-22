
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'

const ServicesCard = async() => {
    const query = `*[_type == 'service']| order(name asc){
  _id,
  name,
    details,
    "imageUrl": image.asset->url
}`;
    const services = await client.fetch(query);
    if (!services) return <p>Loading...</p>;

    
  return (
    <div className='w-full h-full py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className='w-full flex flex-col gap-4 p-6 bg-white dark:bg-background-dark rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300'
          >
            {/* Header */}
            <div className='flex items-center justify-between'>
              <p className='text-xl font-bold font-headline text-primary-dark dark:text-primary-light'>
                {`0${index + 1}.`}
              </p>
              <Link
                href={`/services/${service._id}`}
                className='text-xs font-medium font-headline bg-primary-light dark:bg-primary-dark text-background-light dark:text-background-dark px-3 py-1 rounded-full hover:opacity-90 transition'
              >
                Read More
              </Link>
            </div>

            {/* Title */}
            <h2 className='text-center text-2xl md:text-3xl font-headline font-bold text-foreground-light dark:text-foreground-dark'>
              {service.name}
            </h2>

            {/* Image */}
            <div className='w-full aspect-video overflow-hidden rounded-lg'>
              <Image
                src={urlFor(service.imageUrl).width(800).url()}
                alt={service.name}
                width={800}
                height={450}
                className='w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300'
              />
            </div>

            {/* Description */}
            <p className='text-sm text-center text-gray-dark dark:text-gray-light'>
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesCard