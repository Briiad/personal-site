import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getProjects = async () => {
  const query = gql`
    query GetProjects {
      projects {
        id
        excerpt
        slug
        tech
        title
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.projects
}