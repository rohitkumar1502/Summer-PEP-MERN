import { useState } from "react";
import CatBar from "../components/categorybar";
import NavBar from "../components/navbar";

const SearchPage = (props) => {
  const { Catoge } = props;
  //  let searchText = ''
  const [searchText, setSearchText] = useState("");
  console.log("initially: ", searchText);

  const [product, setProducts] = useState([]);
  async function getData(e) {
    const val = e.target.value;
    const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
    const data = await res.json();
    setProducts(data.products);
    console.log("API Called");
  }
  // const handleSearch = (e) => {
  //   const val = e.target.value;
  //   // searchText = val
  //   setSearchText(val);
  // };

  return (
    <>
      <NavBar getData={getData}/>
      <CatBar Catoge={Catoge} />
      <div>Text is : {searchText}</div>
      {/* <button onClick={getData}>Get Data</button> */}
      {product.map((elem) => {
        return <p key={elem.id}>{elem.title}</p>;
      })}
    </>
  );
};

export default SearchPage;
