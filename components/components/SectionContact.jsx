import React, {useContext} from 'react'
import {BtnCTA} from "../"
import Link from "next/link"
import { MyContext } from "../../utils/context/MyContext";




function SectionContact() {

// console.log(content);
const {contact} = useContext(MyContext)
console.log(contact);

  return (
    <>
      <section className="contact-container">
        <p>{contact.description}</p>
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