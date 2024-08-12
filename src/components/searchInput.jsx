import { useState } from "react";

const SearchInput = ({ name, placeholder, searchItem }) => {
  const [value, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchItem(value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={value}
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        name={name}
        id={name}
        placeholder={placeholder}
        className="px-2 py-1 w-full text-sm lg:text-lg rounded-xl border outline-none text-black"
      />
      <button
        type="submit"
        className="border border-orange-500 px-2 rounded-xl hover:bg-orange-400 hover:text-white"
      >
        جستجو
      </button>
    </form>
  );
};

export default SearchInput;
