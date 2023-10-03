import { useEffect, useState } from "react";
import "./style.css";
// import { ProductContext } from "../../context/ProductContext";

const Sidebar = ({ filters, setFilters, setSideFilter, urunler, sidefilter }) => {
  const [filtersName, setFiltersName] = useState([]);
  const dropdownMenu = (e) => {
    console.log(e.target.nextElementSibling);
    console.log(document.querySelector(".content-wrapper li"));

    // console.log(document.querySelector(`.sidebarItem${id}`).nextElementSibling);
    e.target.nextElementSibling.classList.toggle("disp");
  };
  const filtrele = (e) => {
    console.log(typeof e.target.classList.value);
    if (String(e.target.classList.value).indexOf("clicked") > 0) {
      setFiltersName(filtersName.filter((item) => item !== e.target.innerText));
      console.log("123");
      e.target.classList.remove("clicked");
      console.log(document.querySelector("content-wrapper"));
      document.querySelector(".content-wrapper").scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      e.target.classList.add("clicked");

      setFiltersName([...filtersName, e.target.innerText]);

      console.log(e.target.innerText);
      // sidefilter ? setSideFilter(`${sidefilter},${e.target.innerText}`) : setSideFilter(`${e.target.innerText}`);
      document.querySelector(".content-wrapper").scroll({
        top: 0,
        behavior: "smooth",
      });

      // console.log(stockFilter(urunler, "stock"));
    }
    console.log(e.target.innerText);
    console.log(e.target.classList.value);
  };
  const deleteFilter = (e) => {
    // if(e.target.id.value)
    console.log(e.target);
    // e.target.remove();
    setFiltersName(filtersName.filter((item) => item !== e.target.innerText));
    setSideFilter("");
    console.log(document.querySelector(`.${e.target.innerText}`));
    const classes = e.target.innerText.replaceAll(" ", ".");
    console.log(classes);
    document.querySelector(`.${classes}`).classList.remove("clicked");

    // console.log(document.querySelector(`.${e.target.innerText}.`));
    // document.querySelector(`.${e.target.innerText}`).classList.toggle("clicked");

    // document.querySelector(`.${e.target.innerText}`).classList.remove("tıklandı");
  };
  // {Sidebar.map((item, index) => (
  //   <div key={index}>
  //     <span className="pointer" onClick={dropdownMenu}>
  //       {item.title}
  //     </span>
  //     <ul>
  //       {item.dropdown.map((dropItem, index) => (
  //         <li key={index} className="pointer flex" onClick={filtrele}>
  //           <span className={`sidebarDrop ${dropItem}`}>
  //             {dropItem === "price" ? <input type="range" /> : dropItem}
  //             {/* {dropItem === "Blue" && <div style={{ width: "1rem", height: "1rem", backgroundColor: `${dropItem}` }}></div>} */}
  //           </span>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // ))}
  // const { filterProducts } = useContext(ProductContext);
  useEffect(() => {}, [filtersName]);

  // const stockFilter = (data, stock) => {
  //   return data.filter((item) => item.stock.toLocaleLowerCase().indexOf(`${stock}`) !== -1);
  // };
  // const typeFilter = (data, type) => {
  //   return data.filter((item) => item.type.toLocaleLowerCase().indexOf(`${type}`) !== -1);
  // };
  // const colorFilter = (data, color) => {
  //   return data.filter((item) => item.color.toLocaleLowerCase().indexOf(`${color}`) !== -1);
  // };

  return (
    <section className="sidebar">
      <div className="content-wrapper">
        <ul id="filtreleme" className="flex">
          {filtersName.map((item, index) => (
            <li className="filter pointer" key={index} onClick={deleteFilter}>
              {item}
            </li>
          ))}
        </ul>

        <div>
          <span className="pointer" onClick={dropdownMenu}>
            Avalibility
          </span>
          <ul className="disp">
            <li className="">
              <span className="sidebarDrop In stock" onClick={filtrele}>
                In stock
              </span>
            </li>
            <li className="">
              <span className="sidebarDrop Out of stock" onClick={filtrele}>
                Out of stock
              </span>
            </li>
          </ul>
        </div>
        <div>
          <span className="pointer" onClick={dropdownMenu}>
            Product type
          </span>
          <ul className="disp">
            <li className="flex">
              <span className="sidebarDrop Hoodie" onClick={filtrele}>
                Hoodie
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop Jacket" onClick={filtrele}>
                Jacket
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop Long Sleeve T-Shirt" onClick={filtrele}>
                Long Sleeve T-Shirt
              </span>
            </li>
          </ul>
        </div>
        <div>
          <span className="pointer" onClick={dropdownMenu}>
            Price
          </span>
          <ul className="disp">
            <li className="flex">
              <span className="sidebarDrop" onClick={filtrele}>
                <input type="range" />
              </span>
            </li>
          </ul>
        </div>
        <div>
          <span className="pointer" onClick={dropdownMenu}>
            Color
          </span>
          <ul className="disp">
            <li className="flex">
              <span className="sidebarDrop Blue" onClick={filtrele}>
                Blue
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop Red" onClick={filtrele}>
                Red
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop Black" onClick={filtrele}>
                Black
              </span>
            </li>
          </ul>
        </div>
        <div>
          <span className="pointer" onClick={dropdownMenu}>
            Size
          </span>
          <ul className="disp">
            <li className="flex">
              <span className="sidebarDrop XS" onClick={filtrele}>
                XS
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop S" onClick={filtrele}>
                S
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop M" onClick={filtrele}>
                M
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop L" onClick={filtrele}>
                L
              </span>
            </li>
            <li className="flex">
              <span className="sidebarDrop XL" onClick={filtrele}>
                XL
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
