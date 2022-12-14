import React from "react";
import { Header, Footer,  } from "..";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          cursor: none;
        }
        main {
          padding: 5px 20px;
          flex: 1 0 auto;
          max-width: 600px;
          margin: 50px auto 0;
        }
        @media screen and (min-width: 992px) {
          main {
            padding: 5px 70px;
            margin: 60px auto 0;
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  );
}

export default Layout;
