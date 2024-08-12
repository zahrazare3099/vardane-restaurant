const FastfoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div
      className="bg-white shadow-sm flex flex-col rounded-xl fade-in-horizental opacity-0"
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
      <div className="p-3 text-center flex flex-col gap-y-3 grow">
        <span className="font-bold "> {name}</span>
        <span className="text-xs text-gray-600 grow"> {ingredients}</span>
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
