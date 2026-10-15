import { Search } from "./components/Search";
import "./App.css";
import { AutoCompleteContextProvider } from "./context/AutoCompleteProvider";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  return (
    <main className="app-container">
      <AutoCompleteContextProvider>
        <div className="search-wrapper">
          <Search />
          <SearchResultsList />
        </div>
      </AutoCompleteContextProvider>
    </main>
  );
}

export default App;
