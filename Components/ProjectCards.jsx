'use client'
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


//Slider
// import Autoplay from "embla-carousel-autoplay"
// //import { useEmblaCarousel } from "embla-carousel-react"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"
import Link from 'next/link';

const ProjectCards = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p className="text-center text-red-500">Project not found. Please reload the page...</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  }

  //  const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // )

  return (

    <div className="w-full px-4 md:px-8 overflow-hidden">
      <Slider {...settings}>
        {projects.map((project) => (
           <div key={project._id} className="w-full h-full flex items-center justify-center">
             <div className=" w-[80%] h-[70vh] rounded-md text-foreground-dark " style={{backgroundImage: `url(${urlFor(project.imageUrl).width(1200).height(800).url()})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
               <div className="w-full h-full flex flex-col items-start justify-end ">
                 <div className='bg-black/50 p-4 flex flex-col gap-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-md rounded-br-md backdrop-blur'>
                   <p className='w-fit text-xs text-gray-dark font-healine border border-gray-dark p-1 rounded-full'>{project.services?.name}</p>
                   <h2 className="text-xl font-headline font-bold">{project.title}</h2>
                   <p className="text-sm font-body">{project.details}</p>
                   <Link href={`projects/${project._id}`} className='w-fit px-2 py-1 text-sm font-headline font-light bg-primary-dark dark:bg-primary-light rounded-full hover:bg-primary-light dark:hover:bg-primary-dark '>Read More</Link>                      
                 </div>
               </div>
             </div>
             </div>
        ))}
      </Slider>
    </div>
    // <div className="w-full h-full px-4 md:px-8  lg:w-[30%] flex flex-col items-center justify-center ">
    //   <Carousel
    //   plugins={[plugin.current]}
    //   className="w-full h-full flex flex-col items-center justify-center "
    //   onMouseEnter={plugin.current.stop}
    //   onMouseLeave={plugin.current.reset}
    // >
    //   <CarouselContent>
    //         {projects.map((project) => (
    //           <CarouselItem key={project._id} className="w-full h-full flex items-center justify-center">
    //             <div className=" w-[80%] h-[70vh] rounded-md text-foreground-dark " style={{backgroundImage: `url(${urlFor(project.imageUrl).width(1200).height(800).url()})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    //               <div className="w-full h-full flex flex-col items-start justify-end ">
    //                 <div className='bg-black/50 p-4 flex flex-col gap-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-md rounded-br-md backdrop-blur'>
    //                   <p className='w-fit text-xs text-gray-dark font-healine border border-gray-dark p-1 rounded-full'>{project.services?.name}</p>
    //                   <h2 className="text-xl font-headline font-bold">{project.title}</h2>
    //                   <p className="text-sm font-body">{project.details}</p>
    //                   <Link href={`projects/${project._id}`} className='w-fit px-2 py-1 text-sm font-headline font-light bg-primary-dark dark:bg-primary-light rounded-full hover:bg-primary-light dark:hover:bg-primary-dark '>Read More</Link>                      
    //                 </div>

    //               </div>
    //             </div>
    //           </CarouselItem>
    //         ))}
    //         </CarouselContent>
    //     </Carousel>
    // </div>
  );
  
};

export default ProjectCards;
