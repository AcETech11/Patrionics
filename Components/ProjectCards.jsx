'use client'
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Slider from 'react-slick';

const ProjectCards = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (!projects || projects.length === 0) {
    return <p className="text-center text-red-500">Project not found. Please reload the page...</p>;
  }

  return (
    <div className="w-full h-full px-4 md:px-8 overflow-hidden">
        {projects.map((project) => (
          <div key={project._id} className="p-4">
            <div className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900">
              <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
              {project.mainImage?.asset?._ref && (
                <div className="relative w-full h-64 md:h-96 mb-4">
                  <Image
                    src={urlFor(project.mainImage).width(1200).height(800).url()}
                    alt={project.title || 'Project Image'}
                    fill
                    className="object-cover rounded-md"
                    priority
                  />
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 text-center">{project.details}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectCards;
// {projects.map((project) => (
//             <div key={project._id} className="p-4">
//               <div className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900">
//                 <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
                
//                 {project.mainImage?.asset?._ref && (
//                   <div className="relative w-full h-64 md:h-96 mb-4">
//                     <Image
//                       src={urlFor(project.imageUrl).width(1200).height(800).url()}
//                       alt={project.title || 'Project Image'}
//                       fill
//                       className="object-cover rounded-md"
//                       priority
//                     />
//                   </div>
//                 )}

//                 <p className="text-gray-700 dark:text-gray-300 text-center">{project.details}</p>
//               </div>
//             </div>
//           ))}