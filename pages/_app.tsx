import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleTagManager from "../src/components/GoogleTagManager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  );
}

export default MyApp;
