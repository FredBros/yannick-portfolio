import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ExpandedMenu } from "../";
import { useRouter } from "next/router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { events } = useRouter();

  // useCallback() to prevent rerendering
  const close = useCallback(() => {
    setIsMenuOpen(false);
  });
  useEffect(() => {
    // subscribe to next/router event
    events.on("routeChangeStart", close);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off("routeChangeStart", close);
    };
  }, [close, events]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="header-container">
      <header className="header-upper">
        <Link href="/">
          <a className="name">Yannick Brossard</a>
        </Link>
        <nav className="nav-sections">
          <a
            className="toggle-menu hover-underline-animation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "fermer" : "menu"}
          </a>
        </nav>
      </header>
      <header className="header-lower">
        <Link href="/">
          <a style={{ color: "transparent" }} className="name">
            Yannick Brossard
          </a>
        </Link>
        <div className="role ">
          Skipper
          <br />
          professionnel
        </div>
        <div className="location ">
          basé à Lorient,
          <br /> France
        </div>
        <nav className="nav-sections">
          <Link href="/about">
            <a className="hover-underline-animation about only-large-screen">
              À propos,
            </a>
          </Link>
          <Link href="/services">
            <a className="hover-underline-animation services only-large-screen">
              services,
            </a>
          </Link>
          <Link href="/contact">
            <a className="hover-underline-animation contact only-large-screen">
              Contact,
            </a>
          </Link>
          <a
            style={{ color: "transparent" }}
            className="toggle-menu hover-underline-animation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "fermer" : "menu"}
          </a>
        </nav>
      </header>

      <ExpandedMenu toggle={isMenuOpen} />

      <style jsx>{`
        .header-container {
        }
        header {
          position: fixed;
          z-index: 100;
          font-weight: 600;
          width: 100%;
          text-transform: uppercase;
          font-size: 18px;
          padding: 3px 10px;
          background: transparent;
          top: 0;
          left: 0;
          mix-blend-mode: difference;
          color: var(--background);
        }

        .header-upper,
        .header-lower {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: start;
          margin-right: 10px;
        }
        .header-upper {
          z-index: 100;
          pointer-events: ${isMenuOpen ? "auto" : "none"};
        }
        .header-lower {
          z-index: 45;
        }

        .name {
          grid-column: 1 / span 3;
        }
        .role {
          grid-column: 4 / span 2;
        }
        .location {
          grid-column: 6 / span 3;
        }
        .toggle-menu {
        }
        a {
          white-space: nowrap;
        }

        .nav-sections {
          justify-self: end;
          grid-column: 12 / span 3;
          display: flex;
          gap: 10px;
        }

        @media screen and (max-width: 992px) {
          .header-lower {
            display: none;
          }
          .header-upper {
            pointer-events: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
