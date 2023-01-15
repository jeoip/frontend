import { createContext } from "react";

export interface IPContextType {
  ip: string,
  subnet: string,
  city: string,
  country: string,
  latitude: number,
  longitude: number,
}

const IPContext = createContext<IPContextType | null>(null);

export default IPContext;