import React from 'react'
import Link from 'next/link'
import * as Ai from 'react-icons/ai'
import * as Fi from 'react-icons/fi'

const ProjectCard = ({project}) => {
  return (
    <div className='w-54 h-72 md:w-80 md:h-80 flex flex-col justify-between bg-main-400 md:bg-main-400/70 rounded-md p-4 overflow-hidden'>
      <p className='h-1/5 flex justify-between items-center'>
        <Ai.AiFillFolderOpen className='inline-block text-4xl text-primary' />
        <Fi.FiExternalLink className='inline-block text-xl text-main-100' />
      </p>
      <div className='h-3/5 p-4 z-0'>
        <div className='truncate overflow-ellipsis text-md font-bold text-primary mb-4'>
          <h1 className='text-main-100 text-transparent bg-clip-text bg-gradient-image-pp'>
            <Link href={`/post/${project.slug}`}>
              {project.title}
            </Link>
          </h1>
        </div>
        <p className='text-xs text-main-100 opacity-75'>{project.excerpt}</p>
      </div>
      <p className='h-1/5 flex items-end text-xs bg-main-400 text-primary z-10'>
        {project.tech.map((proj) => (
          <span key={proj} className='border border-primary rounded-xl px-1 py-1 mr-2'>{proj}</span>
        ))}
      </p>
    </div>
  )
}

export default ProjectCard