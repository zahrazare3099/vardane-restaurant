import { useThemeContext } from "../context/ThemContext";

const FastfoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  const { darkMode } = useThemeContext();
  return (
    <div
      className={`shadow-sm flex flex-col rounded-xl fade-in-horizental opacity-0 ${
        darkMode ? "bg-slate-900" : "bg-white "
      }`}
      style={{ animationDelay: delay + "s" }}
    >
      <div className="relative rounded-xl">
        <span className="absolute top-4 right-4 bg-emerald-400 text-white text-xs px-3 py-1 rounded">
          قیمت {price.toLocaleString()} تومان
        </span>
        <img
          className="w-full object-fill rounded-t-xl image__placeholder"
          src={imageUrl}
          alt="foodPic"
        />
      </div>
      <div className="p-3 pb-4 text-center flex flex-col gap-y-3 grow">
        <span
          className={`font-bold ${darkMode ? "text-white " : "text-slate-900"}`}
        >
          {name}
        </span>
        <span
          className={`text-xs grow ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {ingredients}
        </span>
        <button
          type="submit"
          className="w-full pb-1 text-sm font-bold border border-emerald-500 rounded-xl hover:bg-emerald-500 text-emerald-400  hover:text-white"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastfoodItem;
