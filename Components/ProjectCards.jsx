'use client'
import React from 'react'
import { urlFor } from '@/lib/sanity'

// Slider
import Slider from "react-slick";
import Image from 'next/image';

const ProjectCards = ({projects}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  if (!projects) return <p>Loading...</p>;
  return (
    <div className="slider-container">
    <Slider {...settings}>
      {projects.slice(0, 3).map((project) => (
        <div key={project._id}>
          <Image
             src={urlFor(project.imageUrl).url()} 
             alt={project.title} 
             width={2000}
             height={2000}
             />
          <h3>{project.title}</h3>
          <p>{project.location}</p>
        </div>
      ))}
    </Slider>
  </div>

  )
}

export default ProjectCards