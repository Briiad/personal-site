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
    <section className='relative w-full h-screen flex flex-col p-36 bg-main-500'>
      <h1 className='absolute font-bold text-9xl opacity-5 top-10 text-main-100 text-transparent bg-clip-text bg-gradient-image-pp z-0'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 z-10'>
        {projects && projects.map((project) => (
          <ProjectCard key={project.id} project={project.node} />
        ))}
      </div>
    </section>
  )
}

export default Projects

