import React from "react";
import { ThemeChanger } from "..";
import Link from "next/link";

function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <a>Yannick Brossard</a>
        </Link>
        <nav>
          <Link href="/about">
            <a>À propos de moi</a>
          </Link>
          {/* <Link href="/experience">
            <a>Mon expérience</a>
          </Link> */}
          {/* <Link href="/convoyages">
            <a>Mes convoyages</a>
          </Link> */}
          <Link href="/services">
            <a>Mes services</a>
          </Link>
          {/* <Link href="/certificate">
            <a>Mes diplômes</a>
          </Link> */}
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
        <ThemeChanger />
      </header>
      <style jsx>{`
        header {
          display: flex;
        }
        nav {
          display: flex;
        }
      `}</style>
    </>
  );
}

export default Header;
