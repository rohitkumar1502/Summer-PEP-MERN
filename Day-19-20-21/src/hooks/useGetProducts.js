import { useState, useEffect } from "react";
const useGetProducts = (searchText = "") => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`
      );
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      alert(JSON.stringify(e));
    }
  }
  useEffect(() => {
    getProducts();
  }, [searchText]);
  return products;
};

export default useGetProducts;
