import "../styles/globals.css";
import { StrictMode } from "react";
import { Layout, } from "../components";
import { ThemeProvider } from "next-themes";
import { TransitionProvider } from "../context/TransitionContext";
import TransitionLayout from "../animations/TransitionLayout";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <ThemeProvider>
        <TransitionProvider>
          <TransitionLayout>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TransitionLayout>
        </TransitionProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

export default MyApp;


