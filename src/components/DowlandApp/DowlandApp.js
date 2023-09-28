import React from "react";
import "./DowlandApp.css";
import app from "./img4 (1).webp";
import playstore from "./gp.webp";
function DowlandApp() {
  return (
    <section className="DTA">
      <div className="downloadHeader">
        <div className="downloadBox">
          <h2 className="text-center">Become a VIP</h2>
          <h1 className="text-center">
            DOWLAND THE <br /> App
          </h1>
          <p className="text-center">Be the first to know about new arrivals, rare sales, & special offers</p>
          <ul>
            <li>Get early access to exclusive drops & presales</li>
            <li>Get early access to exclusive drops & presales</li>
            <li>Get early access to exclusive drops & presales</li>
            <li>Get early access to exclusive drops & presales</li>
          </ul>
          <div className="flex">
            <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_r6OgLZvkQR&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              {" "}
              <img src={playstore} alt="playstore" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_r6OgLZvkQR&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              {" "}
              <img src={playstore} alt="playstore" />
            </a>
          </div>
        </div>
      </div>
      <div className="phoneImg">
        <img src={app} alt="resim" />
      </div>
    </section>
  );
}

export default DowlandApp;
