import StyledComponentsRegistry from "@/lib/registry";
import { queryClient } from "@/services/queries";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "../app-old/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <div className={`${poppins.variable} antialiased`}>
          <Component {...pageProps} />
        </div>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
