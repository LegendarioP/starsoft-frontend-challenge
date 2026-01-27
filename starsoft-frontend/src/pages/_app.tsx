import StyledComponentsRegistry from "@/lib/registry";
import { queryClient } from "@/services/queries";
import { persistor, store } from "@/store";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PageContainer } from "../styles/globals";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#232323" />
      </Head>
      <div className={poppins.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <StyledComponentsRegistry>
                <PageContainer>
                  <Header />
                  <Component {...pageProps} />
                  <Footer />
                </PageContainer>
              </StyledComponentsRegistry>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}
