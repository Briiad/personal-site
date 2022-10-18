import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='w-full h-full border border-secondary rounded-md p-4'>
      <h2 className='text-lg font-semibold text-secondary'>{project.title}</h2>
    </div>
  )
}

export default ProjectCard