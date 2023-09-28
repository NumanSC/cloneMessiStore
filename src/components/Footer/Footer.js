import React from "react";
import "./Footer.css";
import footerlogo from "./footer-logo_100x100.avif";
import playlogo from "./play_50x50.png";
function Footer() {
  return (
    <section className="footer">
      <div className="mainfooter">
        <div className="footerlogo pointer">
          <img src={footerlogo} alt="resim" />
        </div>
        <div className="footerHeader">
          <span className="pointer">JOIN THE TEAM</span>
          <p className="text-center">
            UNLOCK 10% OFF YOUR FIRST ORDER! & BE THE FIRST TO KNOW ABOUT <br /> LIMITED EDITION DROPS, PROMOTIONS & MORE MESSI BRAND NEWS
          </p>
          <form className="footerform">
            <input placeholder="Email adresss" />
            <button className="btn-primary">SIGN ME UP</button>
          </form>
        </div>
        <div className="footerAbout">
          <div className="customer pointer">
            <strong className="pointer">CUSTOMER SERVICE</strong>
            <ul>
              <li className="pointer">Contact Us</li>
              <li className="pointer">Delivery & Returns</li>
              <li className="pointer">Size Guide</li>
              <li className="pointer">FAQ</li>
              <li className="pointer">Track Your Order</li>
            </ul>
          </div>
          <div className="abouts">
            <strong className="pointer">ABOUT</strong>
            <ul>
              <li className="pointer">The Brand</li>
              <li className="pointer">Privacy Policy</li>
              <li className="pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="footerrow pointer">
          <ul className="retuns">
            <li>Privacy Policy</li>
            <li>Returns</li>
          </ul>

          <ul className="flex appslogo">
            <li className="pointer">
              <img src={playlogo} alt="resim" />
            </li>
            <li className="pointer">
              <img src={playlogo} alt="resim" />
            </li>
            <li className="pointer">
              <img src={playlogo} alt="resim" />
            </li>
          </ul>

          <ul className="pointer">
            <li>© 2022 The Messi Store. All Rights Reserved.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
