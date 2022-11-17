import React, {useEffect} from 'react'
import { getPresentation } from "../services";
import {About,SectionContact,Cursor} from "../components"


function about({data}) {
  const {about, portrait} = data
  
  // console.log(about)
  
  return (
    <>
      <Cursor />
      <main>
        <About data={data} />
      </main>
      <SectionContact />
    </>
  );
}




export default about

export async function getStaticProps() {
  const data = await getPresentation();
  return {
    props: { data }, // will be passed to the page component as props
  };
}