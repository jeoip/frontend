import { createContext } from "react";

export interface IPContextType {
  ip: string,
  subnet: string,
  city: string,
  country: string,
  latitude: number,
  longitude: number,
  asn: string,
  asn_org: string,
  hostname: string,
  user_agent: string,
}

const IPContext = createContext<IPContextType>({
  ip: '',
  subnet: '',
  city: '',
  country: '',
  latitude: -1,
  longitude: -1,
  asn: '',
  asn_org: '',
  hostname: '',
  user_agent: '',
});

export default IPContext;