import { useState } from "react";
import { useThemeContext } from "../context/ThemContext";

const SearchInput = ({ name, placeholder, searchItem }) => {
  const { darkMode } = useThemeContext();
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
        className={`px-2 py-1 w-full text-sm lg:text-base rounded-xl border outline-none ${
          darkMode ? "text-white bg-slate-800 border-orange-500" : "text-black"
        }`}
      />
      <button
        type="submit"
        className="border border-orange-500 px-2 pb-1 rounded-xl text-sm lg:text-base hover:bg-orange-400 hover:text-white"
      >
        جستجو
      </button>
    </form>
  );
};

export default SearchInput;
