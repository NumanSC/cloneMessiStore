import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./messi-logo-word_200x.avif";
import { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import Dropdown, { Dropdown2 } from "../../Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import Basket from "../Basket/Basket";

function Navbar() {
  // const [isDropdown, setIsDropDown] = useState(false);
  const [clickSearch, setClickSearch] = useState(true);
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  // const refItem = useRef();
  // const openMenu = () => {
  //   setIsDropDown(true);
  // };

  const openDropdown = (e) => {
    console.log(e.target.text);
    if (e.target.firstChild.text === "MESSI SHOP") {
      document.querySelector(".menubar").style.display = "block";
    } else if (e.target.firstChild.text === "SHOP BY PRODUCT") {
      document.querySelector(".menubar2").style.display = "block";
    }
  };
  const closeDropdown = (e) => {
    document.querySelector(".menubar").style.display = "none";
    document.querySelector(".menubar2").style.display = "none";
  };
  // const closeMenu = () => {
  //   setIsDropDown(false);
  // };
  const onSearch = () => {
    setClickSearch(!clickSearch);
    clickSearch === false && document.getElementsByClassName("searchInput").focus();
    console.log(document.getElementsByClassName("searchInput"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`search?q=${keyword}`);
    setClickSearch(true);
  };
  const changeBasket = () => {
    if (document.querySelector(".navbar-right .basketWindow").style.display === "flex") {
      document.querySelector(".navbar-right .navbar-item").style.display = "flex";
      document.querySelector(".navbar-right .basketWindow").style.display = "none";

      console.log("if");
    } else {
      console.log("else");
      document.querySelector(".navbar-right .basketWindow").style.display = "flex";
      document.querySelector(".navbar-right .navbar-item").style.display = "none";
    }
  };

  return (
    <>
      <div className="toolbar__content">
        <p className="">⚽Win Cash and a Soccer Ball autographed by Leo.⚽ FIND OUT HOW</p>
      </div>
      {clickSearch && (
        <nav className="navbar between">
          <div className="navbar-left">
            <div className="navbar-img">
              <Link>
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="navbar-item">
              <li onMouseOver={openDropdown} onMouseLeave={closeDropdown} className="navbar-items ">
                <Link className="LinkDrop" to="/urunler">
                  MESSI SHOP
                </Link>
                <div className="menubar">
                  <Dropdown />
                </div>
              </li>
              <li onMouseOver={openDropdown} onMouseLeave={closeDropdown} className="navbar-items pos-relative">
                <Link className="LinkDrop" to="/urunler">
                  SHOP BY PRODUCT
                </Link>
                <div className="menubar2">
                  <Dropdown2 />
                </div>
              </li>
              <li className="navbar-items">
                <a href="https://www.themessistore.com/pages/la-pulga" className="linkA">
                  LA PULGA
                </a>
              </li>
              <li className="navbar-items">
                <a href="https://www.themessistore.com/pages/rosa-vibe" className="linkA">
                  ROSA/VIBE
                </a>
              </li>
              <li className="navbar-items">
                <a href="https://www.themessistore.com/pages/themessistore-app" className="linkA">
                  DOWNLOAD APP
                </a>
              </li>
              <li className="navbar-items">
                <a href="https://www.themessistore.com/collections/summer-blowout-sale/summersale" className="linkA">
                  SALE
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="navbar-item navbar-normal">
              <li className="navbar-items" onClick={onSearch}>
                <SearchBar />
              </li>
              <li className="navbar-items">
                <a href="https://www.themessistore.com/account/login?return_url=%2Faccount">
                  <FontAwesomeIcon icon={faUser} size="xl" className="fontawsome" />
                </a>
              </li>
              <li className="pos-relative navbar-items" onClick={changeBasket}>
                <FontAwesomeIcon icon={faBagShopping} size="xl" className="fontawsome" />
                {localStorage.getItem("1") && <p className="pos-abs totalProduct ">{localStorage.getItem("1")}</p>}
              </li>
            </ul>
            <ul className="navbar-item basketWindow pos-rel">
              <li className="navbar-items" onClick={changeBasket}>
                Close
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </li>
              <Basket />
            </ul>
          </div>
        </nav>
      )}
      {!clickSearch && (
        <nav className="navbar around">
          <form action="submit" onSubmit={handleSubmit} className="searchForm flex">
            <ul className="search-left">
              <input className="searchInput" type="search" placeholder="Searh..." autoFocus={true} onChange={(e) => setKeyword(e.target.value)} />
            </ul>
            <ul className="search-right ">
              <li className="navbar-items">
                <button className="searchButton">
                  <FontAwesomeIcon icon={faSearch} size="xl" />
                </button>
              </li>
              <li className="navbar-items">
                <FontAwesomeIcon icon={faXmark} size="xl" onClick={() => setClickSearch(true)} />
              </li>
            </ul>
          </form>
        </nav>
      )}
    </>
  );
}
export default Navbar;
