import { useState, useEffect } from "react";

import NavBarR from "../components/navbarR";
import CatBar from "../components/categorybar";

const Revision = ({Catoge}) => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [color, setColor] = useState([])

  const getData = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${text}`);
    const data = await res.json();
    console.log(data);
    setData(data.products)
  };
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   };

  useEffect(() => {
    getData();
  }, [text]);

  const handleColorChange = ()=>{
    const num = Math.floor(Math.random() *255)
    setColor(`rgb(${num},${num},${num})`)
  }
  return (
    <>
      <div>
        <div onClick= {handleColorChange}>
            <NavBarR  setText={setText}/>
        </div>
        <CatBar  Catoge= {Catoge}/>
        <h2 style={{backgroundColor:color}}>{text}!</h2>
        <div>
        {data.map((elem) => (
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
            <div className="add-to-cart">Add to cart</div>
            <div className="more-buying-choices">
              More Buying Choices
              <a href="#"> ${elem.price} (5 new offers)</a>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </>
  );
};

export default Revision;
