import React, { useEffect } from "react";
import "./Search.css";
import urunler from "../../hooks/useData";
import { useSearchParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

import MessiShop from "./../../ListeComponents/MessiShop/MessiShop";

function Search() {
  const [SearchParams] = useSearchParams();

  const quary = SearchParams.get("q");
  console.log(quary);
  useEffect(() => {
    document.querySelector("html").scroll({
      top: 0,
    });
  }, []);
  const search = () => {
    return urunler.filter(
      (item) => item.title.toLocaleLowerCase().indexOf(`${quary}`) !== -1 || item.color.toLocaleLowerCase().indexOf(`${quary}`) !== -1 || item.price.toLocaleLowerCase().indexOf(`${quary}`) !== -1
    );
  };
  const call = search()[0];
  console.log(search()[0]);

  return (
    <div className="flex SearchProduct">
      {call && <MessiShop urunler={search()} />}
      {!call && <h2>product not found</h2>}
    </div>
  );
}

export default Search;
