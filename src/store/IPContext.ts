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

const IPContext = createContext<IPContextType | null>(null);

export default IPContext;