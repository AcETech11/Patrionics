import React from 'react'
import TestmonialsCard from './TestmonialsCard'
import { client } from '@/lib/sanity';

const TestmonialsList = async() => {
    const Reviews = `*[_type == "review"] | order(publishedAt desc) {
  _id,
  name,
  company,
  services[]->{
    name
  },
  rating,
  comment,
  "imageUrl": mainImage.asset->url
}`;
    const ReviewList = await client.fetch(Reviews);
    if (!ReviewList) return <p>Loading...</p>;
  return (
    <TestmonialsCard Review={ReviewList}/>
  )
}

export default TestmonialsList