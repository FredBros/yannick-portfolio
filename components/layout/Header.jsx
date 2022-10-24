import React from "react";
import Link from "next/link";
import { Plus} from "../";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a className="name">Yannick Brossard</a>
          </Link>

          <div className="nav-sections">
            <Link href="/about">
              <a className="hover-underline-animation about">À propos,</a>
            </Link>
            {/* <Link href="/experience">
            <a>Mon expérience</a>
          </Link> */}
            {/* <Link href="/convoyages">
            <a>Mes convoyages</a>
          </Link> */}
            <Link href="/services">
              <a className="hover-underline-animation services">services,</a>
            </Link>
            {/* <Link href="/certificate">
            <a>Mes diplômes</a>
          </Link> */}
            <Link href="/contact">
              <a className="hover-underline-animation contact">Contact</a>
            </Link>
            <Link href="/">
              <a>
                <div className="plus">
                  <Plus color={"var(--background)"} />
                </div>
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <style jsx>{`
        header {
          font-weight: 600;
          z-index: 100;
          width: 100%;
          text-transform: uppercase;
          font-size: 18px;
          padding: 3px 10px;
          background: transparent;
          position: sticky;
          top: 0;
          left: 0;
          mix-blend-mode: difference;
          color: var(--background)
        }
        nav {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-column-gap: 25px;
          align-items: start;
          margin-right: 10px;
        }
        a {
          white-space: nowrap;
        }

        .location {
          grid-column: 7 / span 2;
          position: relative;
        }
        .nav-sections {
          justify-self: end;
          grid-column: 10 / span 3;
          display: flex;
          gap: 10px;
        }
        .plus {
          height: 32px;
          transition: transform 0.3s;
          transform-origin: center;
        }
        .plus:hover {
          transform: rotate(180deg);
        }
        .hover-underline-animation {
          display: inline-block;
          position: relative;
          color: inherit;
        }
        .hover-underline-animation:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--background);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .hover-underline-animation:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </>
  );
}

export default Header;
