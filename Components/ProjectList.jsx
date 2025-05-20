import React from 'react'
import { client, urlFor } from '@/lib/sanity'
import ProjectCards from './ProjectCards';

const ProjectList = async() => {
      const query = `*[_type == 'project']| order(name asc){
    _id,
    title,
    "services": service->{name},
    "project_categories": project_categories[]->{name},
    location,
    "imageUrl": mainImage.asset->url,
    details,
    publishedAt,
    body,
  }`;
      const projectList = await client.fetch(query);
      if (!projectList) return <p>Loading...</p>;
  return (

      <ProjectCards projects={projectList}/>
      

  )
}

export default ProjectList