import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl"
import {messages, getDirection} from '@/lang/translate'

export default function App({ Component, pageProps }: AppProps) {

  let { locale } = useRouter();
  if (!locale) {
    locale = "en";
  }
  console.log(locale);
  

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}
