import React from 'react'
import { Cursor, Contact,  } from "../components/";
import {getContact} from "../services/"

function contact({ data }) {
  
  return (
    <>
      <Cursor />
      <main>
        <Contact data={data.contact}/>
      </main>
    </>
  );
}

export default contact





export async function getStaticProps() {
  const data = await getContact();
  return {
    props: { data }, // will be passed to the page component as props
  };
}