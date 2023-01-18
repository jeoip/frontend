import { createContext } from "react";

export interface IPAPIContextType {
  ip: string;
  item: string;
  onItemSelect: Function;
}

const IPAPIContext = createContext<IPAPIContextType>({
  ip: '',
  item: '',
  onItemSelect: () => {}
});

export default IPAPIContext;