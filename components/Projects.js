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
    <section className='w-full h-screen'>
      <div>
        {projects && projects.map((project) => (
          <span key={project.id}>
            {project.title}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Projects