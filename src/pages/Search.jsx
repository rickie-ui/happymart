import { GoSearch, GoStarFill } from "react-icons/go";
import BackButton from "../components/Button/BackButton";
import { shopData } from "../constants/shopData";
import { useState } from "react";
import Debounce from "../utils/Debounce";

const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = Debounce(query, 400);
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    // Check if the query is not empty before executing the search
    if (debouncedQuery.trim() !== "") {
      // Filter shopData based on the query and store the results in searchResults
      const results = shopData.filter(({ name }) => {
        return name.toLowerCase().includes(debouncedQuery.toLowerCase());
      });

      setSearchResults(results);
      setSearchPerformed(true);
    } else {
      // Handle the case when the query is empty (optional)
      setSearchResults([]);
      setSearchPerformed(false);
    }
  };

  return (
    <section className="mx-auto w-11/12 pt-5">
      <div className="flex items-center justify-between text-2xl font-medium">
        <BackButton />
        <h2 className="opacity-60">Search Item</h2>
        <p></p>
      </div>

      <form onSubmit={handleSearch} className="relative my-6 flex w-auto">
        <p>
          <GoSearch className="absolute left-2 top-2 text-xl" />
        </p>
        <input
          type="text"
          placeholder="Search anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-4/5 rounded-l-xl px-8 py-2 opacity-60 outline-0"
        />
        <button
          type="submit"
          className="rounded-r-xl bg-white/60 px-2 focus:outline-none active:bg-transparent"
          disabled={!query.trim()}
        >
          Search
        </button>
      </form>

      {/* Display search results */}
      <div>
        {searchPerformed ? (
          searchResults.length > 0 ? (
            <section className="space-y-4 pb-24">
              {searchResults.map((product) => (
                <div
                  className="relative h-auto rounded-2xl bg-white p-2"
                  key={product.id}
                >
                  <img
                    src={product.imageUrl}
                    alt="product"
                    className="mx-auto h-32 w-full rounded-t-2xl object-cover object-top"
                  />
                  <p className="my-2 font-medium">{product.name}</p>
                  <div className="my-2 flex items-center text-xs font-semibold text-[#FFBD5A]">
                    <GoStarFill />
                    &nbsp;<p>{product.rating || "1.0"}</p>
                  </div>

                  <div className="my-2 flex justify-between gap-1">
                    <p>{`$${product.price.toFixed(2)}`}</p>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <h2 className="mt-44 text-center font-medium opacity-40">
              No search results found
            </h2>
          )
        ) : (
          <h2 className="mt-44 text-center font-medium opacity-40">
            You have no recent searches
          </h2>
        )}
      </div>
    </section>
  );
};

export default Search;
