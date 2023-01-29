import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { IntlProvider } from "react-intl"
import {getMessages, getLocale} from '@/lang/locale'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={getLocale()} messages={getMessages()}>
      <Component {...pageProps}/>
    </IntlProvider>
  );
}
