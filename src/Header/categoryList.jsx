import useAxios from "../components/hooks/useAxios";

const CategoryList = ({ filterItem, children }) => {
  // fetch category
  const { data: categories, loading } = useAxios({
    url: "/FoodCategory/categories",
  });

  return (
    <nav className="flex flex-wrap items-baseline justify-between gap-2 py-2 px-3 sm:p-4 bg-white text-sm lg:text-lg rounded-2xl">
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <li className="cursor-pointer font-bold" onClick={() => filterItem("")}>
          همه ی فست فود ها
        </li>
        <>
          {loading ? (
            <>
              <li className="h-6 w-12 bg-gray-300 text-gray-300 rounded  animate-pulse">
                item
              </li>
              <li className="h-6 w-12 bg-gray-300 text-gray-300 rounded  animate-pulse">
                item
              </li>
              <li className="h-6 w-12 bg-gray-300 text-gray-300 rounded  animate-pulse">
                item
              </li>
              <li className="h-6 w-12 bg-gray-300 text-gray-300 rounded  animate-pulse">
                item
              </li>
              <li className="h-6 w-12 bg-gray-300 text-gray-300 rounded  animate-pulse">
                item
              </li>
            </>
          ) : (
            categories.map((item) => (
              <li
                className=" hover:text-red-500 focus:text-red-500 hover:font-bold focus-within::font-bold cursor-pointer"
                key={item.id}
                onClick={() => filterItem(item.id)}
              >
                {item.name}
              </li>
            ))
          )}
        </>
        {}
      </ul>
      <div className="w-64">{children}</div>
    </nav>
  );
};

export default CategoryList;
