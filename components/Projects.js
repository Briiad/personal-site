import React, {useState, useEffect} from 'react'

import { getProjects } from '../services'
import ProjectCard from './ProjectCard'

export const Projects = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then((newProject) => setProjects(newProject))
  }, [])


  return (
    <section className='relative w-full h-auto md:h-screen flex flex-col p-12 md:p-36 bg-main-100'>
      <h2 className='text-7xl md:text-9xl top-0 md:top-10 text-primary' >The Creative</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 z-10 pt-24 md:pt-0'>
        {projects && projects.map((project) => (
          <ProjectCard key={project.id} project={project.node} />
        ))}
      </div>
    </section>
  )
}

export default Projects

