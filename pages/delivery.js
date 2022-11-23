import React from 'react'
import { Cursor, Delivery } from "../components";
import { getDelivery } from "../services/";

function delivery({data}) {
  // console.log(data)
  return (<>
    <Cursor />
      <main>
        <Delivery data={data} />
      </main>
    </>
  )
}

export default delivery

export async function getStaticProps() {
  const data = await getDelivery();
  return {
    props: { data }, // will be passed to the page component as props
  };
}