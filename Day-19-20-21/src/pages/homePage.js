import { useNavigate } from "react-router-dom";
import ProductInfoCard from "../components/productinfoCard";
import NavBar from "../components/navbar";
import CatBar from "../components/categorybar";
import useGetProducts from "../hooks/useGetProducts";

const HomePage = (props) => {
  const { Catoge, productInfoCard, setSearchText } = props;
  const navigate = useNavigate();
  const products = useGetProducts();

  const openSearchPage = () => {
    navigate("/search");
  };

  let count = 0;
  const reqLength = 16;
  const filteredProducts = products.filter((elem, index) => {
    if (Math.random() >= 0.5 || reqLength - count === products.length - index) {
      if (count < reqLength) {
        count++;
        return true;
      } else return false;
    } else return false;
  });

  console.log("\n✅ : filteredProducts:", filteredProducts);

  const dummy = [0, 1, 2, 3];
  return (
    <div>
      <NavBar setSearchText={setSearchText} openSearchPage={openSearchPage} />
      <CatBar Catoge={Catoge} />

      <div className="home-card-page">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/4.UNREC-PC-_hero_3000x1200-1unrec._CB569789166_.jpg"
          className="card-img"
        />
        <div className="home-card-page-container">
          {dummy.map((elem) => {
            return (
              <ProductInfoCard
                key={elem}
                data={filteredProducts.slice(elem * 4, elem * 4 + 4)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
