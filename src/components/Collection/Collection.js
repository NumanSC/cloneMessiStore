import React from "react";
import { useNavigate } from "react-router";
import "./Collection.css";
import reyonImg from "./LM1134-M-1010T-shirt-Black01_1800x1800.webp";

function Collection() {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate("urunler/1");
  };
  return (
    <section className="containerCollaction container">
      <h2 className="text-center">
        <strong>PRECISION:</strong>MESSI COLLECTION
      </h2>
      <div className="collection">
        <div className="col">
          <div className="arkaPlan">
            <img src={reyonImg} alt="" />
            {/* <img src="" alt="" /> */}
          </div>
          <div className="about">
            <div className="aciklama text-center">
              <p className="text-center">Messi Legend Jacket - Blue with Navy Hood</p>
              <p className="text-center money">$180</p>
            </div>
            <div className="buttons flex">
              <button onClick={navigateDetails} className="btn btn-primary">
                DETAİLS
              </button>
              <button className="btn btn-secondary">BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="arkaPlan">
              <img src={reyonImg} alt="" />
            </div>
            <div className="about">
              <div className="aciklama text-center">
                <p>Messi Legend Jacket - Blue with Navy Hood</p>
                <p className="money">$180</p>
              </div>
              <div className="buttons">
                <button className="btn btn-primary" onClick={navigateDetails}>
                  DETAİLS
                </button>
                <button className="btn btn-secondary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="arkaPlan">
              <img src={reyonImg} alt="" />
            </div>
            <div className="about">
              <div className="aciklama text-center">
                <p>Messi Legend Jacket - Blue with Navy Hood</p>
                <p className="money">$180</p>
              </div>
              <div className="buttons">
                <button className="btn btn-primary" onClick={navigateDetails}>
                  DETAİLS
                </button>
                <button className="btn btn-secondary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="arkaPlan">
              <img src={reyonImg} alt="" />
            </div>
            <div className="about">
              <div className="aciklama text-center">
                <p>Messi Legend Jacket - Blue with Navy Hood</p>
                <p className="money">$180</p>
              </div>
              <div className="buttons">
                <button className="btn btn-primary" onClick={navigateDetails}>
                  DETAİLS
                </button>
                <button className="btn btn-secondary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
