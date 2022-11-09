import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ExpandedMenu } from "../";
import { useRouter } from "next/router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


   const { events } = useRouter();

   const close = ()=> {
     setIsMenuOpen(false)
   }
  

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
    <>
      <header>
        <nav className="nav-header">
          <Link href="/">
            <a className="name">Yannick Brossard</a>
          </Link>

          {!isMenuOpen ? (
            <>
              <div className="role only-large-screen">
                Skipper
                <br />
                professionnel
              </div>
              <div className="location only-large-screen">
                basé à Lorient,
                <br /> France
              </div>
              <div className="nav-sections">
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
                  className="toggle-menu hover-underline-animation"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  menu
                </a>
              </div>
            </>
          ) : (
            <div className="nav-sections">
              <a
                className="toggle-menu hover-underline-animation"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                fermer
              </a>
            </div>
          )}
        </nav>
      </header>

      <ExpandedMenu toggle={isMenuOpen} />

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
          color: var(--background);
        }
        .nav-header {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: start;
          margin-right: 10px;
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
          cursor: pointer;
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
          .only-large-screen {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
