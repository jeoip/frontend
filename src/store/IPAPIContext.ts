import { createContext } from "react";

export interface IPAPIContextType {
  selected: string;
}

const IPAPIContext = createContext<IPAPIContextType>({
  selected: ''
});

export default IPAPIContext;