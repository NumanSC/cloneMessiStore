import React, { useState } from "react";
import "./Search.css";

import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductList from "./../../ListeComponents/productList/ProductList";
import Sidebar from "../../ListeComponents/sidebar/SideBar";

function Search() {
  const [SearchParams] = useSearchParams();
  const [filters, setFilters] = useState(true);
  const [sidefilter, setSideFilter] = useState("");
  const quary = SearchParams.get("q");

  const url = "http://localhost:3000/urunler?q=" + quary;
  console.log(url);
  const { data: urunler } = useFetch(url);
  return (
    <div className="flex SearchProduct">
      <Sidebar filters={filters} setFilters={setFilters} setSideFilter={setSideFilter} urunler={urunler} sidefilter={sidefilter} />
      <ProductList urunler={urunler} setSideFilter={setSideFilter} sidefilter={sidefilter} />
    </div>
  );
}

export default Search;
