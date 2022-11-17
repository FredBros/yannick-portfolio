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
          margin-top: 50px;
          padding: 5px 20px;
          flex: 1 0 auto;
        }
      `}</style>
    </>
  );
}

export default Layout;
