import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  return (
    <section className="dropdown">
      <div>
        <ul>
          <li>
            <h5>Messi Collaction</h5>
          </li>
          <li>
            <Link>Messi Legend Jacket - Navy with Blue Hood</Link>
          </li>
          <li>
            <Link>Messi Legend Jacket - Blue with navy Hood</Link>
          </li>
          <li>
            <Link>Messi Signature Two Pocket Plaid Shirt</Link>
          </li>
          <li>
            <Link>Messi Tech Flexweave Chino Pants - Black</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <h5>Messi Studio T-Shirts</h5>
          </li>
          <li>
            <Link>Leo Tattoo Montage T-Shirt - White</Link>
          </li>
          <li>
            <Link>Messi Paint Splash Logo Outline Tee - Navy</Link>
          </li>
          <li>
            <Link>Messi Paint Splash Logo Outline Tee - Navy</Link>
          </li>
          <li>
            <Link>Messi Reflective Logo T-Shirt - Navy</Link>
          </li>
          <li>
            <Link>Reflective Lion Head T-Shirt - Neon</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h5>Graphics</h5>
          </li>
          <li>
            <Link>Graphic T-Shirts</Link>
          </li>
          <li>
            <Link>Graphic Hoodies & Crewnecks</Link>
          </li>
          <li>
            <Link>Kids Graphic T-Shirts</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h5>Shop All Products</h5>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h5>Messi Green Line</h5>
          </li>
          <li>
            <Link>Messi Green Cargo Sweat Pant Joggers</Link>
          </li>
          <li>
            <Link>Messi Green Cargo Sweatpant French Terry Joggers</Link>
          </li>
          <li>
            <Link> Messi Green Eco Print Hoodie</Link>
          </li>
          <li>
            <Link>Messi Green Sweatshirt</Link>
          </li>
          <li>
            <Link>Messi Green Regular Fit Short</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h5>Winning Streak</h5>
          </li>
          <li>
            <Link> Winning Streak Track Jacket</Link>
          </li>
          <li>
            <Link>Winning Streak Crewneck Sweatshirt</Link>
          </li>
          <li>
            <Link>El Clásico Joggers</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <h5>Vamos Argentina: Champions Collection</h5>
          </li>
          <li>
            <Link>Champ Messi Tee</Link>
          </li>
          <li>
            <Link>Campeón del Mundo Graphic T-Shirt</Link>
          </li>
          <li>
            <Link>Campeón del Mundo - Hoodie</Link>
          </li>
          <li>
            <Link>Campeón Del Mundo - Kid's T-Shirt</Link>
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
          <Link>Hoodies & Crewnecks</Link>
        </li>
        <li>
          <Link>Zip Jackets</Link>
        </li>
        <li>
          <Link>Tops</Link>
        </li>
        <li>
          <Link>Pants</Link>
        </li>
        <li>
          <Link>Graphic T-Shirts</Link>
        </li>
        <li>
          <Link>Graphic Hoodies</Link>
        </li>
        <li>
          <Link>Graphic T-Shirts</Link>
        </li>
        <li>
          <Link>Kids Graphic T-Shirts</Link>
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
