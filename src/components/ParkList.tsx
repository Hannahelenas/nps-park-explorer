import { useState, useRef } from "react";
import { useParkContext } from "../hooks/useParkContext";
import ParkCard from "./cards/ParkCard";
import SecondaryButton from "./common/SecondaryButton";

const ParkList = () => {
  const { parks, loading, error } = useParkContext();
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  if (loading) return <div>Loading parks...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredParks = parks.filter((park) =>
    park.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Park search form */}
      <form
        onSubmit={handleSearch}
        className="mb-6 max-w-3xl mx-auto px-5 sm:px-15 lg:px-0 flex 
        items-center gap-x-2"
      >
        <div
          className="flex items-center flex-1 bg-white border-2
         border-white rounded-3xl"
        >
          <input
            type="text"
            placeholder="Search parks..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value === "") {
                setSearch("");
              }
            }}
            ref={inputRef}
            className="flex-1 p-3 rounded-3xl"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-3 hover:cursor-pointer transition rounded-full 
              "
            >
              ✕
            </button>
          )}
        </div>
        <SecondaryButton type="submit">Search</SecondaryButton>
      </form>

      {/* Park List */}
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
      lg:gap-1 mb-6"
      >
        {filteredParks.length > 0 ? (
          filteredParks.map((park) => (
            <li key={park.id}>
              <ParkCard park={park} />
            </li>
          ))
        ) : (
          <div>
            <p className="mb-2">No parks found. </p>
            <SecondaryButton
              type="button"
              onClick={() => {
                setQuery("");
                setSearch("");
                inputRef.current?.focus();
              }}
            >
              Clear Search
            </SecondaryButton>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ParkList;
