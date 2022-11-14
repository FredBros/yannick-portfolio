import React from "react";
import Link from "next/link";
import { forwardRef } from "react";

// function BtnCTA({ children, href}) {

const BtnCTA = forwardRef(function BtnCTA({ children, href }, ref) {
  return (
    <>
      <Link href={href} passHref>
        <button>
          <a className="btn hover-underline-animation hover-underline-animation-btn">
            {children}
          </a>
        </button>
      </Link>
      <style jsx>{`
        
        button {
          background-color: var(--background);
          color: var(--foreground);
          cursor: pointer;
          border: solid 4px var(--foreground);
         
        }
        a {
          margin: 30px;
        }
        button:hover {
          box-shadow: inset 0px 0px 0px 4px var(--foreground);
        }
      `}</style>
    </>
  );
});

export default BtnCTA;
