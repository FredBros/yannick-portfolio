import "../styles/globals.css";
import { StrictMode } from "react";
import { Layout, } from "../components";
import { ThemeProvider } from "next-themes";
import { MyContextProvider } from "../utils/context/MyContext"


function MyApp({ Component, pageProps }) {
  return (
    // <StrictMode>
      <ThemeProvider>
        <MyContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MyContextProvider>
      </ThemeProvider>
    // </StrictMode>
  );
}

export default MyApp;


