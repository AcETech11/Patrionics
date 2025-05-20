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
    <div>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {services.slice(0, 3).map((service, index) => (
                <div key={index} className='w-full h-full flex flex-col gap-2 shadow-md dark:shadow-background-light/30 border border-gray-light dark:border-gray-dark p-4 rounded-lg'>
                    <div className='flex items-center justify-between gap-2'>
                        <p className='text-2xl font-headline font-bold'>{`0${index + 1}.`}</p>
                        <Link href={`/services/${service._id}`} className='text-sm font-headline font-light bg-primary-light dark:bg-primary-dark text-background-light dark:text-background-dark p-1.5 rounded-md'>Read More</Link>
                    </div> 
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold font-headline text-center'>{service.name}</h2>
                    <Image
                         src={urlFor(service.imageUrl).width(800).url()}
                        alt='Home Automation'
                        width={2000}
                        height={2000}
                        className='rounded-md'
                    />
                    <p className='text-sm dark:text-gray-dark text-gray-light text-center'>{service.details}</p>  

                </div>
            ))}
                
            </div>
    </div>
  )
}

export default ServicesCard