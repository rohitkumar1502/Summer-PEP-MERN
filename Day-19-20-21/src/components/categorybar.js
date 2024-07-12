import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AppContext from "../contexts/appContext";

const CatBar = () => {
    const {Catoge} = useContext(AppContext)
  return (
    <div className="home-cat">
      <button className="all-btn">
        <GiHamburgerMenu className="burgar"/>
        ALL
      </button>
      <div className="cat-item">
        {Catoge.map((elem) => {
          return <p key={elem}>{elem}</p>;
        })}
      </div>
    </div>
  );
};
export default CatBar