import { useEffect, useState } from "react";
import "./style.css";
// import { ProductContext } from "../../context/ProductContext";

const Sidebar = ({ filters, setFilters, setSideFilter, urunler, sidefilter }) => {
  const Sidebar = [
    {
      title: "Avalibility",
      dropdown: ["In stock", "In stock"],
    },
    {
      title: "Product type",
      dropdown: ["Hoodie", "Jacket", "Long Sleeve Crew", "Long Sleeve T-Shirt"],
    },
    {
      title: "Price",
      dropdown: ["price"],
    },
    {
      title: "Color",
      dropdown: ["Blue", "Red", "Black "],
    },
    {
      title: "Size",
      dropdown: ["XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS", "XS"],
    },
  ];
  const [filtersName, setFiltersName] = useState([]);
  const dropdownMenu = (e) => {
    console.log(e.target.nextElementSibling);
    console.log(document.querySelector(".content-wrapper li"));

    // console.log(document.querySelector(`.sidebarItem${id}`).nextElementSibling);
    e.target.nextElementSibling.classList.toggle("disp");
  };
  const filtrele = (e) => {
    if (e.target.classList.value === "tıklandı") {
      setSideFilter("");
      e.target.classList.remove("tıklandı");
      console.log(document.querySelector("content-wrapper"));
      document.querySelector(".content-wrapper").scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      e.target.classList.add("tıklandı");
      setFiltersName([...filtersName, e.target.innerText]);

      sidefilter ? setSideFilter(`${sidefilter}&&q=${e.target.innerText}`) : setSideFilter(`/?q=${e.target.innerText}`);
      document.querySelector(".content-wrapper").scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    console.log(e.target.innerText);
    console.log(e.target.classList.value);
  };
  const deleteFilter = (e) => {
    e.target.remove();
    setSideFilter("");
    console.log(e.target);
    console.log(document.querySelector(`.${e.target.innerText}`));
    // document.querySelector(`.${e.target.innerText}`).classList.remove("tıklandı");
  };
  // const { filterProducts } = useContext(ProductContext);
  useEffect(() => {
    console.log(filtersName);
  }, [filtersName]);
  return (
    <section className="sidebar">
      <div className="content-wrapper">
        <ul id="filtreleme" className="flex" onClick={deleteFilter}>
          {filtersName.map((item, index) => (
            <li className="filter pointer" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {Sidebar.map((item, index) => (
          <div key={index}>
            <span className="pointer" onClick={dropdownMenu}>
              {item.title}
            </span>
            <ul>
              {item.dropdown.map((dropItem, index) => (
                <li key={index} className="pointer flex" onClick={filtrele}>
                  <span className={`sidebarDrop ${dropItem}`}>
                    {dropItem === "price" ? <input type="range" /> : dropItem}
                    {/* {dropItem === "Blue" && <div style={{ width: "1rem", height: "1rem", backgroundColor: `${dropItem}` }}></div>} */}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
