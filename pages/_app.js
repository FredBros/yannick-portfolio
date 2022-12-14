import "../styles/globals.css";
import { StrictMode } from "react";
import { Layout, } from "../components";
import { MyContextProvider } from "../utils/context/MyContext"


function MyApp({ Component, pageProps }) {
  return (
    // <StrictMode>
     
        <MyContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MyContextProvider>
      
    // </StrictMode>
  );
}

export default MyApp;


