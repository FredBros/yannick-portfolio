import React from "react";
import { Cursor, Diplome } from "../components";
import { getDiplome } from "../services/";

function diplome({data}) {

  return (
    <>
      <Cursor />
      <main>
        <Diplome data={data.diplomes} />
      </main>
    </>
  );
}

export default diplome;

export async function getStaticProps() {
  const data = await getDiplome();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

