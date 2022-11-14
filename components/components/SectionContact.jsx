import React from 'react'
import {BtnCTA} from "../"
import Link from "next/link"



function SectionContact({ content }) {

console.log(content);


  return (
    <>
      <section className="contact-container">
        <p>{content.description}</p>
        <div className="button-container">
          <Link href="/contact" passHref>
            <BtnCTA href="/contact">
              <h2>contact</h2>
            </BtnCTA>
          </Link>
        </div>
      </section>
      <style jsx>{`
        .contact-container {
          margin: 40px 0;
        }
        .button-container {
          margin: 30px;
          text-align: center;
        }
        p {
          text-align: center;
          white-space: pre-wrap;
        }
         {
        }
        @media screen and (min-width: 992px) {
          p {
            text-align: start;
            max-width: 25%;
          }
        }
      `}</style>
    </>
  );
}

export default SectionContact