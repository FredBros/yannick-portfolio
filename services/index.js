import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getHomeData = async () =>{
    const query = gql`
      query GetHomedata {
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


export const getPresentation = async () => {
  const query = gql`
    query GetPresentation {
      presentations(first: 1, orderBy: publishedAt_ASC) {
        about {
          content {
            raw
          }
          picture {
            height
            url
            width
          }
          title
          subtitle
        }
        portrait {
          height
          url
          width
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.presentations[0];
};


export const getServices = async () => {
  const query = gql`
query GetServices {
  services(orderBy: publishedAt_ASC, first: 1) {
    title
    photo {
      height
      url
      width
    }
    id
    presentation {
      raw
    }
    servicesCard {
      picture {
        height
        url
        width
      }
      slug
      subtitle
      title
      content {
        raw
      }
    }
    slug
  }
}
  `;
  const result = await request(graphqlAPI, query);
  return result.services[0];
};