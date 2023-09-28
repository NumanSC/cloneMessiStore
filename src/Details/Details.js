import "./Details.css";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

function Details({ addProduct }) {
  const { id } = useParams();

  console.log(id);
  const url = "http://localhost:3000/urunler/" + id;
  const { data: urun } = useFetch(url);
  console.log();
  const dispMenu = (e) => {
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.classList.toggle("dispnone");
  };
  const selectSize = (e) => {
    document.querySelectorAll(".checked");
    e.target.classList.add("checked");

    console.log(e.target);
  };
  const addProducts = () => {
    addProduct(id, 1, urun.img[0], urun.title, urun.price);
    console.log(addProduct);
    console.log("ss");
    console.log(urun.img[0]);
  };
  return (
    <div className="Details ">
      {urun && (
        <div className="flex">
          <div className="detailsImg">
            <div className="grid col-2 gap">
              {urun.img.map((resim, index) => (
                <div key={index}>
                  <img src={`/productimg/${resim}`} alt={resim} className="img-fluid" />
                </div>
              ))}
            </div>
            <div className="desciption ">
              <button className="pointer flex" onClick={dispMenu}>
                Desciption
              </button>
              <div className="dispnone">
                <strong>Leo's favorite casual trouser can be worn with a Hoodie or Blazer.</strong>
                <p>The Flex weave pant is a great addition to any wardrobe and is the perfect pant to take on your travels. Also available in BLACK.</p>
                <strong>Care Instructions:</strong>
              </div>
            </div>
            <div className="desciption">
              <button className="pointer flex" onClick={dispMenu}>
                Care
              </button>
              <ul className="col-2 dispnone">
                <li>
                  <div className="flex">Do not bleach</div>
                </li>
                <li>
                  <div className="flex">Do not bleach</div>
                </li>
                <li>
                  <div className="flex">Do not bleach</div>
                </li>
                <li>
                  <div className="flex">Do not bleach</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="detailsSide color-fff">
            <div>
              <a href="https://www.themessistore.com/">Home</a>{" "}
            </div>
            <h1>{urun.title}</h1>
            <div onClick={selectSize}>
              <div className="selectColor">
                <label htmlFor="color">
                  Color -<span className="color">{urun.color}</span>
                </label>
                <div
                  style={{
                    display: "block",
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: `${urun.color}`,
                    margin: "0.5rem 0 0 0",
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  }}
                ></div>
              </div>
              <div className="selectSize">
                <label htmlFor="">
                  Size - <span>Size chart</span>
                </label>
                <div>
                  <fieldset id="fieldset" className="flex" onClick={selectSize}>
                    <label className="checked" htmlFor="S">
                      S
                    </label>
                    <input id="S" type="radio" value="S" />

                    <input id="M" type="radio" value="M" className="M" />
                    <label htmlFor="M">M</label>

                    <input id="L" type="radio" value="L" className="L" />
                    <label htmlFor="L">L</label>

                    <input id="XL" type="radio" value="XL" className="XL" />
                    <label htmlFor="XL">XL</label>

                    <input id="XLL" type="radio" value="XLL" className="XLL" />
                    <label htmlFor="XLL">XLL</label>
                  </fieldset>
                </div>
              </div>

              <span className="icon-and-text flex">
                <span className="icon">
                  <div className="greenIcon"></div>
                </span>
                <span className="text">In stock, ready to ship </span>
              </span>
              <div className="price">
                <span>Price</span>
                <br />
                <span className="urunprice">${urun.price}</span>
              </div>
              <div className="Shipping">
                <a href="https://www.themessistore.com/policies/shipping-policy">Shipping </a>
                calculated at checkout.
              </div>
              <button className="btn btn-primary-2 addCart" onClick={addProducts}>
                Add to cart
              </button>
              <span className="icon-and-text block earth">
                <span className="icon"></span>
                <span className="text">Worldwide Shipping Available</span>
              </span>
              <span className="truck block">
                <span className="icon"></span>
                <span className="text">14 Day Return Policy</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
