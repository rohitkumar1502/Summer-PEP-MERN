import { useState, useEffect, useContext } from "react";
import AppContext from "../contexts/appContext";
const useGetProducts = (params = {}) => {
  const { searchText } = useContext(AppContext);
  const { isSearchTextDependent = true } = params;
  const [products, setProducts] = useState([]);

  async function getProducts(stx) {
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${stx}`);
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      alert(JSON.stringify(e));
    }
  }
  useEffect(() => {
    if (isSearchTextDependent) {
      getProducts(searchText);
    } else {
      getProducts("");
    }
  }, [searchText]);
  return products;
};

export default useGetProducts;
