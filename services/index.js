import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getHomeData = async () =>{
    const query = gql`
      query gethomedata {
        headers(orderBy: publishedAt_ASC, first: 1) {
          id
          role
          picture {
            height
            url
            width
          }
          description
        }
        homepages(orderBy: publishedAt_ASC, first: 1) {
          about {
            title
            description
            image {
              height
              url
              width
            }
            id
          }
          delivery {
            title
            description
            image {
              height
              url
              width
            }
            id
          }
          diplomes {
            title
            description
            image {
              height
              url
              width
            }
            id
          }
          experience {
            title
            description
            image {
              height
              url
              width
            }
            id
          }
          service {
            title
            description
            image {
              height
              url
              width
            }
            id
          }
          contact {
            title
            description
            image {
              height
              url
              width
            }
            id
          }
          id
        }
      }
    `;
    const result = await request(graphqlAPI, query);
    return result
}