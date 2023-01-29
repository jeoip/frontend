import { useRouter } from 'next/router';
import en from './en.json'
import fa from './fa.json'

export const messages: { [key: string]: any } = {
  en,
  fa
};

export function getMessages() {
  return messages[getLocale()]
}

export function getLocale() {
  let { locale } = useRouter()
  if (!locale) {
    locale = 'fa'
  }
  return locale
}

export function getDirection() {

  let locale = getLocale()

  if (locale === "fa") {
    return "rtl";
  }
  return "ltr";
}