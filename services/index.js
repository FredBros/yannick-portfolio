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
      services(first: 1, orderBy: publishedAt_ASC) {
        id
        services {
          picture {
            url
            width
            height
          }
          slug
          subtitle
          title
          content {
            raw
          }
        }
        servicesCard {
          content {
            raw
          }
          slug
          subtitle
          title
          picture {
            height
            url
            width
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.services[0];
};



export const getContact = async () => {
  const query = gql`
query GetContact {
  contacts(orderBy: publishedAt_ASC, first: 1) {
    id
    contact {
      content {
        raw
      }
      slug
      picture {
        height
        url
        width
      }
      subtitle
      title
    }
  }
}
   `;
  const result = await request(graphqlAPI, query);
  return result.contacts[0];
}


export const getExperience = async () => {
  const query = gql`
    query GetExperience {
      experiences(first: 1, orderBy: publishedAt_ASC) {
        experience {
          content {
            raw
          }
          picture {
            height
            url
            width
          }
          slug
          id
          subtitle
          title
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.experiences[0];
}

export const getDiplome = async () => {
  const query = gql`
    query GetDiplome {
      diplomes(first: 1, orderBy: publishedAt_ASC) {
        diplomes {
          content {
            raw
          }
          id
          slug
          subtitle
          title
          picture {
            height
            url
            width
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.diplomes[0];
}

export const getTest = async () => {
  const query = gql`
    query GetTest {
      tests {
        content
      }
    }
  `;
const result = await request(graphqlAPI, query);
  return result.tests[0];
  }


export const getDelivery = async () => {
  const query = gql`
    query GetDelivery {
      deliveries(first: 1, orderBy: publishedAt_ASC) {
        id
        deliveries {
          id
          title
          subtitle
          picture {
            height
            url
            width
          }
          content {
            raw
          }
        }
        deliveryCard {
          content {
            raw
          }
          title
          gpsCoord {
            latitude
            longitude
          }
          picture {
            url
            width
            height
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.deliveries[0];
};