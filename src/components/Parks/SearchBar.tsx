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
      className="max-w-3xl mx-auto flex items-center"
    >
      <div
        className="flex mx-auto bg-white 
        rounded-3xl overflow-hidden w-5/6"
      >
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
          className="w-full md:w-2xl p-3 rounded-l-3xl"
        />

        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={() => {
              onClear();
              inputRef.current?.focus();
            }}
            className="p-3 hover:bg-gray-100 transition"
            aria-label="Clear search input"
          >
            <FiX size={20} aria-hidden="true" />
          </button>
        )}

        {/* Search button */}
        <button
          type="submit"
          aria-label="Search parks"
          className="bg-[var(--color-text)] border-2 
          border-[var(--color-text)] px-6 py-3 text-white rounded-full 
          transition-all 
          duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent
           hover:text-black 
          hover:border-[var(--color-primary)]"
        >
          <FiSearch size={20} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
