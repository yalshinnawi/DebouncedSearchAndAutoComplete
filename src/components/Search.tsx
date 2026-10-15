import { useContext, useEffect } from "react";
import { FRUITS } from "../data/fruits";
import { AutoCompleteContext } from "../context/AutoCompleteContext";
import { useDebounce } from "../hooks/useDebounce";

export const Search = () => {
  const context = useContext(AutoCompleteContext);
  const handleQueryChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const nextValue = event.target.value;
    context.setQuery(nextValue);
    context.setIsOpen(true);
  };
  const matchesSearch = (text: string, term: string) => {
    return text.toLocaleLowerCase().includes(term.toLocaleLowerCase());
  };
  const debouncedQuery = useDebounce(context.query, 300);

  useEffect(() => {
    if (!context.query || !debouncedQuery) {
      context.setSearchResults([]);
      return;
    }
    if (context.query) {
      const results = FRUITS.filter((fruit) =>
        matchesSearch(fruit.name, debouncedQuery),
      );
      context.setSearchResults(results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);
  return (
    <input
      className="search-input"
      placeholder="Type what you would like to search here"
      value={context.query}
      onChange={(event) => {
        handleQueryChange(event);
      }}
    />
  );
};
