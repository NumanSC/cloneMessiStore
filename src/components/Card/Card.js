import React from "react";
import "./Card.css";
import cardImg from "./Card.jpg";
function Card() {
  return (
    <>
      {/* <div className="card">
        <div className="container card-row">
          <div className="card-column">
            <div className="card-column-1"></div>
          </div>
          <div className="card-column">
            <div className="card-column-2"></div>
          </div>
        </div>
      </div> */}

      <div className="card-background">
        <div className="card">
          <div className="grid-card start">
            <p className="cardText">KIDS T-SHIRTS</p>
            <img src={cardImg} alt="" />
          </div>
          <div className="grid-card end">
            <p className="cardText">KIDS T-SHIRTS</p>
            <img src={cardImg} alt="" />
          </div>

          <div className="grid-card start">
            <p className="cardText">KIDS T-SHIRTS</p>
            <img src={cardImg} alt="" />
          </div>

          <div className="grid-card end">
            <p className="cardText">KIDS T-SHIRTS</p>
            <img src={cardImg} alt="" />
          </div>
          <div className="grid-card start">
            <p className="cardText">KIDS T-SHIRTS</p>
            <img src={cardImg} alt="" />
          </div>

          <div className="grid-card end">
            <p className="cardText">KIDS T-SHIRTS</p>
            <img src={cardImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
