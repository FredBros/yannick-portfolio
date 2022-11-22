import React from 'react'
import { Cursor, Experience} from "../components"
import { getExperience } from "../services/";


function experience({data}) {
  return (

    <>
    <Cursor/>
    <main>
      <Experience data={data.experience}/>
    </main>
    
    </>
  )
}

export default experience


export async function getStaticProps() {
  const data = await getExperience();
  return {
    props: { data }, // will be passed to the page component as props
  };
}