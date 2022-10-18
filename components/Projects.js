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
    <section className='w-full h-screen p-36 bg-main-500'>
      <div className='grid grid-cols-3 gap-4'>
        {projects && projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects