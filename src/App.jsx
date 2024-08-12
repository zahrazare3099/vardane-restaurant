import { useState } from "react";
import Header from "./Header/header";
import CategoryList from "./Header/categoryList";
import SearchInput from "./components/searchInput";
import useAxios from "./components/hooks/useAxios";
import Content from "./content";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [url, setUrl] = useState("/FastFood/list/");
  //fetch Fastfoods /FastFood/list/
  const { data: fastfoodItems, loading } = useAxios({ url });

  // filter by click item of category
  const filterItem = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? `?categoryId=${categoryId}` : ""}`);
  };
  // fetch by item in search
  const searchItem = async (searchValue) => {
    setUrl(`/FastFood/search/${searchValue ? `?term=${searchValue}` : ""}`);
  };

  return (
    <div
      className={`wrapper w-full flex flex-col bg-zinc-200 ${
        fastfoodItems?.length ? "gap-y-8" : "gap-y-0"
      }`}
    >
      <Header>
        <CategoryList filterItem={filterItem}>
          <SearchInput
            name="search"
            placeholder="جستجوی فست فود ..."
            searchItem={searchItem}
          />
        </CategoryList>
      </Header>
      {loading ? <Loading /> : <Content fastfoodItems={fastfoodItems} />}
    </div>
  );
}

export default App;
