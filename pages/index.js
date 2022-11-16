import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Hero,
  Loader,
  SectionHomepage,
  SectionContact,
  Cursor,
  
} from "../components";
import { getHomeData } from "../services";

export default function Home({ data }) {
  const { headers, homepages } = data;

  const homepage = homepages[0];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  });

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Yannick Brossard</title>
        <meta
          name="description"
          content="Yannick Brossard, Skipper professionnel"
        />
      </Head>
      <Cursor />
      
        <Hero content={headers[0]} />
        <main>
          {homepage.service ? (
            <SectionHomepage
              key={homepage.about.title}
              content={homepage.about}
              link="/about"
            />
          ) : null}
          {homepage.service ? (
            <SectionHomepage
              key={homepage.experience.title}
              content={homepage.experience}
              link="/experience"
            />
          ) : null}
          {homepage.service ? (
            <SectionHomepage
              key={homepage.delivery.title}
              content={homepage.delivery}
              link="/delivery"
            />
          ) : null}
          {homepage.service ? (
            <SectionHomepage
              key={homepage.service.title}
              content={homepage.service}
              link="/services"
            />
          ) : null}
          {homepage.diplomes ? (
            <SectionHomepage
              key={homepage.diplomes.title}
              content={homepage.diplomes}
              link="/services"
            />
          ) : null}
          <SectionContact content={homepage.contact} link="/contact" />
        </main>
     

      <style jsx>{`
        h1 {
          transform-origin: left;
          transition: transform 0.3s;
        }
        h1:hover {
          transform: scale(1.3, 1.1);
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const data = await getHomeData();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
