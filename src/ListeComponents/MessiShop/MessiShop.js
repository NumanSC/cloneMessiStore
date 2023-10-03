import { useEffect, useState } from "react";
// import urunler from "../../hooks/useData";
import ProductList from "../productList/ProductList";
import SideBar from "../sidebar/SideBar";
import "./MessiShop.css";
// import useFetch from "../../hooks/useFetch";

function MessiShop({ urunler }) {
  // const urunler = db.db;

  const [filters, setFilters] = useState(true);
  const [sidefilter, setSideFilter] = useState("");
  // const { data: urunler } = useFetch("http://localhost:3000/urunler" + sidefilter);
  // console.log(sidefilter);
  // useEffect(() => {
  //   console.log(urunler);
  // }, [urunler]);
  // useEffect(() => {
  //   console.log(sidefilter);
  // }, [sidefilter]);

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
  // const urun = () => {};
  useEffect(() => {
    document.querySelector("html").scroll({
      top: 0,
    });
    console.log("details yüklendi", document.querySelector(".Details"));
    console.log(urunler);
  }, [urunler]);
  return (
    <section className="messiShop">
      <div className="pos-relative backgoundShopAll">
        <div className="pos-abs imgHeader">
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
