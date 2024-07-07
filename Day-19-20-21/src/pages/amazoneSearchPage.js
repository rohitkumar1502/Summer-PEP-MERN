import { useEffect } from "react";
import {Link} from 'react-router-dom'
import CatBar from "../components/categorybar";
import NavBar from "../components/navbar";

const SearchPage = (props) => {
  const { Catoge , setSearchText, searchText, getData, product} = props;
  //  let searchText = ''
  // console.log("initially: ", searchText);



  // const handleSearch = (e) => {
  //   const val = e.target.value;
  //   // searchText = val
  //   setSearchText(val);
  // };

 

  useEffect(()=>{
    getData();
  },[searchText])

  return (
    <>
      <NavBar setSearchText={setSearchText} />
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
            <Link  className="add-to-cart" to={`/search/${elem.id}`}>More Details</Link>
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
