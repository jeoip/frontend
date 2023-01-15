
import en from './en.json'
import fa from './fa.json'

export const messages: { [key: string]: any } = {
  en,
  fa
};

export function getDirection(locale: string) {
  if (locale === "fa") {
    return "rtl";
  }
  return "ltr";
}