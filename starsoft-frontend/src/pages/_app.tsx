import StyledComponentsRegistry from "@/lib/registry";
import { queryClient } from "@/services/queries";
import { persistor, store } from "@/store";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Footer from "../components/Footer";
import Header from "../components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <StyledComponentsRegistry>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </StyledComponentsRegistry>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}
