import React from "react";
import { Header, Footer, HeaderRoleLocation } from "..";

function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <HeaderRoleLocation/>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
