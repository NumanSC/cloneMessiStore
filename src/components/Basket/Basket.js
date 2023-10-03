import React, { useContext } from "react";
import "./Basket.css";
import { ProductContext } from "../../context/ProductContext";

function Basket() {
  const { top } = useContext(ProductContext);
  console.log(top);
  const increaseProduct = (e) => {
    e.preventDefault();
    // addProduct(e.target.id,2)
  };
  return (
    <div className="pos-abs Basket">
      {top[0] == null && "Your cart is currently empty."}
      {/* {top[0] &&
        <img src={`/productimg/${top[0].img}`} alt=""  className='basketImg'/>
    } */}
      {top &&
        top.map((urun) => (
          <div className="flex flex-evenly " key={urun.id}>
            <ul>
              <li>
                <img src={`/productimg/${urun.img}`} alt="Gösterilemeyen Ürün" className="basketImg" />
              </li>
            </ul>
            <ul>
              <li>{urun.title}</li>
              <li>
                <div className="flex space-between ">
                  <div>
                    <button className="increment">-</button>
                    {urun.adet}{" "}
                    <button id={urun.id} className="increment" onClick={increaseProduct}>
                      +
                    </button>
                  </div>

                  <div className="flex-end">${urun.price}</div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      <p>Subtotal</p>
      <button className="btn btn-primary-2 text-center Checkout">Check out</button>
      <p className="text-center">Shipping, taxes, and discount codes calculated at checkout.</p>
    </div>
  );
}

export default Basket;
