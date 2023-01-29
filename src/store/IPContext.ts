import { createContext } from "react";

export interface IPContextType {
  countryCode: string,
  subnet: string,
  country: string,
  country_eu: boolean,
  region: string,
  city: string,
  asn: string,
  asn_org: string,
  latitude: number,
  longitude: number,
  zipcode: string,
  timezone: string,
  user_agent: string,
  hostname: string,
  query: string,
  status: boolean
}

const IPContext = createContext<IPContextType>({
  countryCode: '',
  subnet: '',
  country: '',
  country_eu: false,
  region: '',
  city: '',
  asn: '',
  asn_org: '',
  latitude: -1,
  longitude: -1,
  zipcode: '',
  timezone: '',
  user_agent: '',
  hostname: '',
  query: '',
  status: false
});

export default IPContext;