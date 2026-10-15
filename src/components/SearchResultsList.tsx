import { useContext } from "react";
import { AutoCompleteContext } from "../context/AutoCompleteContext";
import type { Fruit } from "../data/fruits";

export const SearchResultsList = () => {
  const searchContext = useContext(AutoCompleteContext);
  const searchResults = searchContext.searchResults;
  if (!searchContext || !searchContext.isOpen || searchResults.length === 0) {
    return null;
  }
  const onClickHandler = (fruitName: string) => {
    searchContext.setQuery(fruitName);
    searchContext.setIsOpen(false);
  };
  return (
    <ul className="search-results-list">
      {searchResults.map((fruit: Fruit) => {
        return (
          <li
            key={fruit.id}
            className="search-result-item"
            onClick={() => onClickHandler(fruit.name)}
          >
            {fruit.name}
          </li>
        );
      })}
    </ul>
  );
};
