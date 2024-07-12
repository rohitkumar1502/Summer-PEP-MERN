import { useContext } from "react";
import { Link } from "react-router-dom";
import CatBar from "../components/categorybar";
import NavBar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../contexts/appContext";


const SearchPage = (props) => {
  const { Catoge } = props;
  const product = useGetProducts();
  const { addToCart } = useContext(AppContext);
  return (
    <>
      <NavBar />
      <CatBar Catoge={Catoge} />
      {/* <div>Text is : {searchText}</div> */}
      {/* <button onClick={getData}>Get Data</button> */}
      {product.map((elem) => (
        <div key={elem.id} className="card">
          <img src={elem.thumbnail} />

          <div className="">
            <div className="title">{elem.title}</div>
            <div class="rating">
              <span>Rating: </span>
              <span>({elem.rating})</span>
            </div>
            <div className="price">$ {elem.price}</div>
            <div className="original-price">M.R.P.: {elem.price + 10}</div>
            <div className="discount">(50% off)</div>
            <div className="delivery">FREE delivery Sun, 7 Jul</div>
            <div className="prime">
              <span>prime</span>
            </div>
            <Link className="add-to-cart" to={`/search/${elem.id}`}>
              More Details
            </Link>
            <button
            className="add-to-cart"
              onClick={() => {
                addToCart(elem);
              }}
            >
              Add to Cart
            </button>
            {/* <div className="add-to-cart">Add to cart</div> */}
            <div className="more-buying-choices">
              More Buying Choices
              <a href="#"> ${elem.price} (5 new offers)</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchPage;
