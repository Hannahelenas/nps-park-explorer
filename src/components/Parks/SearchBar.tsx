import { useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchBar = ({ query, setQuery, onSearch, onClear }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto flex justify-center  "
    >
      <div className="flex bg-white rounded-3xl ">
        {/* Search field */}
        <label htmlFor="park-search" className="sr-only">
          Search parks
        </label>
        <input
          id="park-search"
          type="text"
          placeholder="Search parks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
          className="sm:w-sm md:w-md flex-1 p-3 rounded-3xl"
        />

        {/* Clear button placeholder */}
        <div className="w-12 flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              onClear();
              inputRef.current?.focus();
            }}
            aria-label="Clear search input"
            className={`transition-opacity ${
              query
                ? "opacity-100 pointer-events-auto hover:cursor-pointer"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Search button */}
        <button
          type="submit"
          aria-label="Search parks"
          className="flex justify-center bg-[var(--color-text)] 
          border-2 border-[var(--color-text)]
           px-6 py-3 text-white rounded-3xl transition-all 
           duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent
            hover:text-black hover:border-[var(--color-primary)]"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
