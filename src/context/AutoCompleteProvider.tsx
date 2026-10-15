import { useState } from "react";
import { AutoCompleteContext } from "./AutoCompleteContext";
import type { Fruit } from "../data/fruits";

type AutoCompleteContextProvider = {
  children: React.ReactNode;
};

export const AutoCompleteContextProvider = ({
  children,
}: AutoCompleteContextProvider) => {
  const [searchResults, setSearchResults] = useState<Fruit[]>([]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AutoCompleteContext.Provider
      value={{
        searchResults,
        setSearchResults,
        query,
        setQuery,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </AutoCompleteContext.Provider>
  );
};
