import React from 'react'
import Link from 'next/link'
import * as Ai from 'react-icons/ai'
import * as Fi from 'react-icons/fi'

const ProjectCard = ({project}) => {
  return (
    <div className='w-80 h-80 flex flex-col justify-between bg-main-400 rounded-md p-4 overflow-hidden'>
      <p className='h-1/5 flex justify-between items-center'>
        <Ai.AiFillFolderOpen className='inline-block text-4xl text-primary' />
        <Fi.FiExternalLink className='inline-block text-xl text-main-100' />
      </p>
      <div className='h-3/5 p-4'>
        <div className='truncate overflow-ellipsis text-sm font-bold text-primary uppercase mb-4'>
          <Link href={`/post/${project.slug}`}>
            {project.title}
          </Link>
      </div>
        <p className='text-xs text-main-100 opacity-75'>{project.excerpt}</p>
      </div>
      <p className='h-1/5 flex items-end text-xs text-primary'>
        {project.tech.map((proj) => (
          <span className='border border-primary rounded-xl px-1 py-1 mr-2'>{proj}</span>
        ))}
      </p>
    </div>
  )
}

export default ProjectCard