import { createContext } from "react";

export interface IPAPIContextType {
  selected: string;
}

const IPAPIContext = createContext<IPAPIContextType | null>(null);

export default IPAPIContext;