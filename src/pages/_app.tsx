import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl"
import {getMessages, getLocale} from '@/lang/translate'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <IntlProvider locale={getLocale()} messages={getMessages()}>
      <Component {...pageProps}/>
    </IntlProvider>
  );
}
