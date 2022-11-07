import "../styles/globals.css";
import { StrictMode } from "react";
import { Layout } from "../components";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StrictMode>
  );
}

export default MyApp;


