import React from 'react'
import Head from 'next/head'

import { getProjects, getProjectDetails } from '../../services'

const PostDetails = ({ project }) => {
  return (
    <section className='bg-main-500'>
      <Head>
        <title>{`Project : ${project.title}`}</title>
      </Head>

      <div className='h-screen w-full p-16 flex flex-col justify-center text-main-100 '>
        <div className='w-full border-b-2 pb-16 border-main-100'>
          <h1 className='text-5xl'>{project.title}</h1>
        </div>
        <p className='flex items-end text-xs text-primary my-8'>
          {project.tech.map((proj) => (
            <span className='border border-primary rounded-xl px-1 py-1 mr-2'>{proj}</span>
          ))}
        </p>
      </div>

      <div className='w-full h-full p-16'>
        <div className='flex items-center justify-center'>
          <img src={project.featuredImage.url} alt={project.title} className="w-2/3 h-2/4 object-cover rounded-md shadow-lg" />
        </div>

        <div className='w-full h-auto flex items-center justify-center'>
          <div className='w-2/3 h-auto bg-main-400 rounded-md p-8 my-6'>
            <p className='text-main-100'>
              {project.excerpt}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getProjectDetails(params.slug)

  return {
    props: {project: data}
  }
}

export async function getStaticPaths() {
  const projects = await getProjects()

  return {
    paths: projects.map(({ node: {slug}}) => ({params: {slug}})),
    fallback: true,
  }
}