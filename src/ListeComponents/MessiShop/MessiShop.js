import { useEffect, useState } from "react";
import ProductList from "../productList/ProductList";
import SideBar from "../sidebar/SideBar";
import "./MessiShop.css";
import useFetch from "../../hooks/useFetch";
function MessiShop() {
  const [filters, setFilters] = useState(true);
  const [sidefilter, setSideFilter] = useState("");
  const { data: urunler } = useFetch("http://localhost:3000/urunler" + sidefilter);
  console.log(sidefilter);
  useEffect(() => {
    console.log(urunler);
  }, [urunler]);
  useEffect(() => {
    console.log(sidefilter);
  }, [sidefilter]);
  // useEffect(() => {
  //   let sidebar = document.getElementsByClassName("products")[0];
  //   let sidebar_content = document.getElementsByClassName("content-wrapper")[0];
  //   window.onscroll = () => {
  //     let scrollTop = window.scrollY;
  //     let wiewportHeight = window.innerHeight;
  //     let contentHeight = sidebar.getBoundingClientRect().height;
  //     console.log(scrollTop);
  //     console.log(wiewportHeight);
  //     console.log(contentHeight);

  //     if (scrollTop <= contentHeight - wiewportHeight) {
  //       sidebar_content.style.position = "fixed";
  //     } else {
  //       sidebar_content.style.position = "";

  //       sidebar_content.style.bottom = "0";
  //     }
  //   };
  // }, []);className="pagePadding"
  return (
    <section className="messiShop">
      <div className="pos-relative h50vh w-100">
        <div className="pos-abs top-30- index-1-">
          <img src="img/0M8A7214_1800x.webp" alt="" className="headerImg" />
        </div>
        <div className="pos-abs top-50 imgHeader">
          <a href="https://www.themessistore.com/">Home</a>
          <h1>Shop All</h1>
        </div>
      </div>
      <div className="details container  ">
        <div>
          <SideBar filters={filters} setFilters={setFilters} setSideFilter={setSideFilter} urunler={urunler} sidefilter={sidefilter} />
        </div>
        <div className="list2 ">
          {filters && <ProductList urunler={urunler} />}
          <div className="flex "></div>
        </div>
      </div>
    </section>
  );
}

export default MessiShop;
