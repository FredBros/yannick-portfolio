import React from 'react'
import { Cursor, SectionContact, Services } from "../components";
import { getServices } from "../services";


function services({ data }) {
 
  return (
    <>
      <Cursor />
      <Services data={data} />
      <SectionContact />
    </>
  );
}

export default services


export async function getStaticProps() {
  const data = await getServices();
  return {
    props: { data }, // will be passed to the page component as props
  };
}