import React from 'react'
import Head from 'next/head'
import { RichText } from '@graphcms/rich-text-react-renderer'

import { getProjects, getProjectDetails } from '../../services'

const PostDetails = ({ project }) => {

  return (
    <React.Fragment>
      <section className='bg-main-500 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-2'>
        <Head>
          <title>{`Project : ${project.title}`}</title>
        </Head>

        <div className='sticky top-0 col-span-1 h-auto md:h-screen w-full pt-20 md:pt-0 p-8 md:p-16 flex flex-col justify-center text-main-100 bg-main-500 '>
          <div className='w-full border-b-2 pb-8 border-main-100'>
            <h1 className='text-5xl text-main-100 text-transparent bg-clip-text bg-gradient-image-pp'>{project.title}</h1>
          </div>
          <p className='flex items-end text-xs text-primary my-8'>
            {project.tech.map((proj) => (
              <span key={proj} className='border border-primary rounded-xl px-1 py-1 mr-2'>{proj}</span>
            ))}
          </p>
        </div>

        <div className='col-span-1 w-full h-full p-2 md:p-16'>
          <div className='flex items-center justify-center'>
            <img src={project.featuredImage.url} alt={project.title} className="w-full h-2/4 object-cover rounded-md shadow-lg" />
          </div>

          <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-full h-auto bg-main-400 rounded-md p-8 my-6 text-main-100 leading-relaxed tracking-wide text-justify'>
              <RichText content={project.content.raw.children} />
            </div>
            
          </div>
        </div>
      </section>
    </React.Fragment>
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