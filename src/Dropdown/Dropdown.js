import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  return (
    <section className="dropdown">
      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Messi Collaction</h5>
            </Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Legend Jacket - Navy with Blue Hood</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Legend Jacket - Blue with navy Hood</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Signature Two Pocket Plaid Shirt</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Tech Flexweave Chino Pants - Black</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Messi Studio T-Shirts</h5>
            </Link>
          </li>
          <li>
            <Link to={"/urunler"}>Leo Tattoo Montage T-Shirt - White</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Paint Splash Logo Outline Tee - Navy</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Paint Splash Logo Outline Tee - Navy</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Reflective Logo T-Shirt - Navy</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Reflective Lion Head T-Shirt - Neon</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Graphics</h5>
            </Link>
          </li>
          <li>
            <Link to={"/urunler"}>Graphic T-Shirts</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Graphic Hoodies & Crewnecks</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Kids Graphic T-Shirts</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Shop All Products</h5>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Messi Green Line</h5>
            </Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Green Cargo Sweat Pant Joggers</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Green Cargo Sweatpant French Terry Joggers</Link>
          </li>
          <li>
            <Link to={"/urunler"}> Messi Green Eco Print Hoodie</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Green Sweatshirt</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Messi Green Regular Fit Short</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Winning Streak</h5>
            </Link>
          </li>
          <li>
            <Link to={"/urunler"}> Winning Streak Track Jacket</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Winning Streak Crewneck Sweatshirt</Link>
          </li>
          <li>
            <Link to={"/urunler"}>El Clásico Joggers</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link to={"/urunler"}>
              <h5>Vamos Argentina: Champions Collection</h5>
            </Link>
          </li>
          <li>
            <Link to={"/urunler"}>Champ Messi Tee</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Campeón del Mundo Graphic T-Shirt</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Campeón del Mundo - Hoodie</Link>
          </li>
          <li>
            <Link to={"/urunler"}>Campeón Del Mundo - Kid's T-Shirt</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Dropdown;

export const Dropdown2 = () => {
  return (
    <div className="dropdown-2">
      <ul>
        <li>
          <Link to={"/urunler"}>Hoodies & Crewnecks</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Zip Jackets</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Tops</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Pants</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Graphic T-Shirts</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Graphic Hoodies</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Graphic T-Shirts</Link>
        </li>
        <li>
          <Link to={"/urunler"}>Kids Graphic T-Shirts</Link>
        </li>
        <li>
          <Link>Beach Towels & Bathrobes</Link>
        </li>
        <li>
          <Link>Underwear & Socks</Link>
        </li>
        <li>
          <Link>Wallet</Link>
        </li>
      </ul>
    </div>
  );
};
