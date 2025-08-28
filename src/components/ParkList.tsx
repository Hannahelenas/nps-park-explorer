import { useState } from "react";
import { useParkContext } from "../hooks/useParkContext";
import ParkCard from "./cards/ParkCard";
import SecondaryButton from "./common/SecondaryButton";
import SearchBar from "./Parks/SearchBar";

const ParkList = () => {
  const { parks, loading, error } = useParkContext();
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  if (loading) return <div>Loading parks...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredParks = parks.filter((park) =>
    park.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => setSearch(query);
  const handleClear = () => {
    setQuery("");
    setSearch("");
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Park search form */}
      <SearchBar
        query={query}
        setQuery={(value) => {
          setQuery(value);
          if (value === "") setSearch("");
        }}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {/* Park List */}
      {filteredParks.length > 0 ? (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
          lg:gap-1 mt-8 mb-6"
        >
          {filteredParks.map((park) => (
            <li key={park.id}>
              <ParkCard park={park} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="w-full mt-8 mb-6 flex flex-col items-center 
        justify-center p-6 "
        >
          <p className="mb-2">No parks found for "{query}"</p>
          <SecondaryButton type="button" onClick={handleClear}>
            Clear Search
          </SecondaryButton>
        </div>
      )}
    </div>
  );
};

export default ParkList;
