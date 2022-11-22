import React, {useState} from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import {AccordionItem} from"../"


function Accordion({data}) {

    const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        {data.map((service, index) => (
          <AccordionItem key={index} title={service.title} content={service.content.raw}/>
        ))}
      </div>

      <style jsx>{`
        .accordion {
          border-top: solid 1px;
          margin-top: 50px;
        }
        
      `}</style>
    </>
  );
}

export default Accordion