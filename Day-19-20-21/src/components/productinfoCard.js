import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/appContext";

const ProductInfoCard = (props) => {
    const { data = [] } = props;
    const contextData = useContext(AppContext);
    console.log(contextData);
    return (
      <div className="products-info-card">
              <h3>{data.title}</h3>
              
              <div className="products-item-cards-container">
                  {data.map((elem) => (
                      <div className="products-item-card">
                          <img  src={elem.thumbnail} />
                          <Link to={`/search/${elem.id}`}>{elem.title}</Link>
                      </div>
                  ))}
              </div>
          </div>
    );
  };
  
  export default ProductInfoCard;