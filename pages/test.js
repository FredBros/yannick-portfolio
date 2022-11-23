import React from 'react'
import { getTest } from "../services/";
import { Cursor } from "../components";



const test = ({data}) => {
    console.log(data)
  return (
    <>
      <Cursor />
      <main>
        {data.content}
      </main>
    </>
  );
}

export default test

export async function getStaticProps() {
  const data = await getTest();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
