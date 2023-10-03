import { useContext, useState } from "react";

import "./ProductList.css";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router";
function ProductList({ urunler }) {
  console.log(urunler);
  const [resim, setResim] = useState();
  const { addProduct } = useContext(ProductContext);
  // useEffect(() => {
  //   urunler.forEach((urun) => {
  //     document.getElementsByClassName(`${urun.id}`).addEventListener("mouseover", () => {
  //       document.getElementsByClassName(`${urun.id}`).src = `products/${urun.img[1]}`;
  //       console.log("mause over");
  //     });
  //   });
  // }, []);
  // const nextImg = (urun) => {
  //   console.log("tık");

  //   const result = urunler.filter((uruns) => uruns.id === urun.id);
  //   if (result) {
  //     result.img = urun.img[1];
  //   }
  //   console.log(result);
  // };
  const navigate = useNavigate();
  const nextImg = (e) => {
    console.log(e.target.alt);
    setResim(e.target.src);
    console.log(e.target.src);
    e.target.src = e.target.alt;
  };
  const backImg = (e) => {
    // e.target.src = "productimg/2022-10-Jackets-1080x1350_1800x1800.wepb";
    e.target.src = resim;
  };
  const addProducts = (e) => {
    e.preventDefault();
    const urun = urunler.find((urun) => urun.id === e.target.id);
    console.log("aranan urun", urun);
    addProduct(e.target.id, 1, urun.img[0], urun.title, urun.price);
    console.log(e.target.img);
  };
  const detNavigate = (e) => {
    console.log(e.target.nextElementSibling.id);
    navigate(`/urunler/${e.target.nextElementSibling.id}`);
  };
  return (
    <div className="products ">
      {urunler &&
        urunler.map((urun) => (
          <div key={urun.id}>
            <div className="numan">{<img onMouseOver={nextImg} onMouseLeave={backImg} className={`${urun.id}`} src={`productimg/${urun.img[0]}`} alt={`productimg/${urun.img[1]}`} />}</div>
            <div className="colorPalet">
              <div className="clip-path">
                <div className="path " style={{ width: "1.4rem", height: "1.4rem", backgroundColor: `${urun.color}` }}></div>
              </div>
            </div>
            <div className="text-center uruntitle">{urun.title}</div>
            <div className="text-center urunPrice">${urun.price}</div>
            <div className="flex flex-center productListButton ">
              <button className="btn btn-secondary text-center w-100" onClick={detNavigate}>
                DETAILS
              </button>
              <button id={urun.id} className="btn btn-primary text-center w-100" onClick={addProducts}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
