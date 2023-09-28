import React from "react";
import "./Follow.css";
import resim from "./n2.jpg";
function Follow() {
  return (
    <section className="container follow">
      <h1 className="header">FOLLOW US ON INSTAGRAM</h1>
      <p className="text-center">Tag @themessistore and #MyMessiFit for the chance to be featured on our store.</p>
      <div className="imageGallery">
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="big gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">{/* <img src={resim} alt="resim" /> */}</div>
        <div className="gradient">
          <img src={resim} alt="resim" />
        </div>
      </div>
      <div className="flex instaButton">
        <button className=" flex">GO TO INSATGRAM</button>
      </div>
    </section>
  );
}

export default Follow;
