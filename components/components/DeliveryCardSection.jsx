import React from 'react'
import { DeliveryCard } from '..'
import { v4 as uuidv4 } from 'uuid';

const DeliveryCardSection = ({data}) => {

    return (
        <>
        {data.map((card)=>
        <DeliveryCard data={card} key={uuidv4()}/>)}

      </>
    );
}

export default DeliveryCardSection