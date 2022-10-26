import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getProjects = async () => {
  const query = gql`
    query GetProjects {
      projectsConnection {
        edges {
          node {
            excerpt
            id
            slug
            tech
            title
            featuredImage{
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.projectsConnection.edges
}

export const getProjectDetails = async ( slug ) => {
  const query = gql`
    query GetProjectDetails($slug: String!) {
      project(where: {slug: $slug}) {
        id
        excerpt
        slug
        tech
        title
        content{
          raw
        }
        featuredImage{
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, {slug})
  return result.project
}