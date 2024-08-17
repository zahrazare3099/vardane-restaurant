import { useThemeContext } from "../context/ThemContext";

const Header = ({ children }) => {
  const { darkMode, setDarkMode } = useThemeContext();
  return (
    <div className="w-full bg-gray-600 text-orange-500 h-44 fixed mb-8 z-10">
      <div className="absolute top-10 px-8 text-xl w-full shadow-lg flex justify-between wrap items-center">
        <h1> کافه رستوران وردنه</h1>
        <button
          onClick={() => setDarkMode(() => !darkMode)}
          className={`text-base px-2 py-1 rounded-xl ${
            darkMode
              ? "text-slate-800 bg-slate-400"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          تاریک
        </button>
      </div>
      <img
        className="object-fill bg-no-repeat h-44 w-full"
        src="src/assets/images/logoFirst.jpg"
        alt="logo"
      />
      <div className="w-full px-7 sm:px-20 absolute -bottom-14 md:-bottom-10">
        {children}
      </div>
    </div>
  );
};
export default Header;
