import React from "react";
import { Header, Footer, Wrapper} from "..";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export default Layout;
