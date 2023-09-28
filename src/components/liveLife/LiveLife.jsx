import React from "react";
import "./LiveLife.css";
function LiveLife() {
  const openMenu = (e) => {
    // setOpen({
    //   menu1: true,
    // });
    console.log(e.target.nextElementSibling);
    if (e.target.nextElementSibling.style.display === "block") {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "block";
    }
  };

  return (
    <section className="liveLife">
      <div>
        <div className="contain">
          <div className="logolife">
            <img src="//www.themessistore.com/cdn/shop/files/logo.png?v=1656691398" alt="Messi Collection" />
          </div>
          <div className="headerlive">
            <h1 className="headerLife">
              Live life with precision <span>on and off the field.</span>
            </h1>
            <p className="pLife text-center">Welcome to the exclusive source of Leo Messi's own Premium Lifestyle Apparel</p>
          </div>
          <div className="column">
            <div>
              <div className="row2">
                <img src="//www.themessistore.com/cdn/shop/files/c1.png?v=1656746627" alt="" />
              </div>
              <div className="yazi">
                <h5 onClick={openMenu}>PREMIUM +</h5>

                <p>
                  The Messi Brand is a direct reflection of the qualities Leo Messi demonstrates on and off the pitch: we specialize in creating innovative, premium lifestyle clothing with high
                  quality and precision detail in every stich.
                </p>
              </div>
            </div>
            <div>
              <div className="row2">
                <img className="" src="//www.themessistore.com/cdn/shop/files/c1.png?v=1656746627" alt="" />
              </div>
              <div className="yazi">
                <h5 onClick={openMenu}>PREMIUM</h5>

                <p>
                  The Messi Brand is a direct reflection of the qualities Leo Messi demonstrates on and off the pitch: we specialize in creating innovative, premium lifestyle clothing with high
                  quality and precision detail in every stich.
                </p>
              </div>
            </div>
            <div>
              <div className="row2">
                <img src="//www.themessistore.com/cdn/shop/files/c1.png?v=1656746627" alt="" />
              </div>
              <div className="yazi">
                <h5 onClick={openMenu}>PREMIUM</h5>

                <p>
                  The Messi Brand is a direct reflection of the qualities Leo Messi demonstrates on and off the pitch: we specialize in creating innovative, premium lifestyle clothing with high
                  quality and precision detail in every stich.
                </p>
              </div>
            </div>
            <div>
              <div className="row2">
                <img src="//www.themessistore.com/cdn/shop/files/c1.png?v=1656746627" alt="" />
              </div>
              <div className="yazi">
                <h5 onClick={openMenu} className="liveH5">
                  PREMIUM
                </h5>

                <p>
                  The Messi Brand is a direct reflection of the qualities Leo Messi demonstrates on and off the pitch: we specialize in creating innovative, premium lifestyle clothing with high
                  quality and precision detail in every stich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveLife;
