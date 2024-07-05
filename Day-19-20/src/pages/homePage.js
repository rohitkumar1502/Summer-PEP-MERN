import { IoSearchSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import ProductInfoCard from "../components/productinfoCard";
import NavBar from "../components/navbar";
import CatBar from "../components/categorybar";

const HomePage = (props) => {
  const {Catoge, productInfoCard} = props
  return (
    <div>
      <NavBar/>
      <CatBar Catoge= {Catoge}/>
     
      <div className="home-card-page">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/4.UNREC-PC-_hero_3000x1200-1unrec._CB569789166_.jpg"
          className="card-img"
        />
        <div className="home-card-page-container">
          {productInfoCard.map((elem) => {
            return <ProductInfoCard data = {elem}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
