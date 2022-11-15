import React from "react";
import Link from "next/link";
import { forwardRef } from "react";

// function BtnCTA({ children, href}) {

const BtnCTA = forwardRef(function BtnCTA({ children, href }, ref) {
  return (
    <>
      <Link href={href} passHref>
        <a>
          <button className="btn">
            <span>
              {children}
            </span>
          </button>
        </a>
      </Link>
      <style jsx>{`
        button {
          background-color: var(--background);
          color: var(--foreground);
          border: solid 4px var(--foreground);
          padding: 20px;
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
