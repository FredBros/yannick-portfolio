import React from "react";
import { Header, Footer } from "..";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
