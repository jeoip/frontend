import { createContext } from "react";

export interface IPAPIContextType {
  enteredIP: string;
  selected: string;
}

const IPAPIContext = createContext<IPAPIContextType>({
  enteredIP: '',
  selected: ''
});

export default IPAPIContext;