import { createContext } from "react";
import type { Fruit } from "../data/fruits";

type AutoCompleteContextType = {
  searchResults: Fruit[];
  setSearchResults: React.Dispatch<React.SetStateAction<Fruit[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AutoCompleteContext = createContext<
  AutoCompleteContextType | undefined
>(undefined);
