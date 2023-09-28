import React from "react";
import "./OurPromise.css";
import img5 from "./img5.webp";
function OurPromise() {
  return (
    <section className="container OP ">
      <div className="down">
        <h1>OUR PROMISE</h1>
        <p>
          Inspire the dreamers like you to live to their fullest potential: to be the best one can be, ON AND OFF THE FIELD.
          <br /> <br />
          Bringing your "A" game shouldn't stop after you play the best game of your life. Bring that passion and hard work to every area of your life - always strive to be the best version of
          yourself, and good things will happen.
        </p>
        <div className="flex">
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <img className="img5" src={img5} alt="resim" />
    </section>
  );
}

export default OurPromise;
