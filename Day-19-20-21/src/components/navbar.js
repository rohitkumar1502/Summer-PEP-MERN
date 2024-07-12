import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import amazon from "../../assets/Amazon-India-Logo-PNG-White.png";
import { FaShoppingCart } from "react-icons/fa";
import AppContext from "../contexts/appContext";


const NavBar = ({openSearchPage }) => {
  const { setSearchText , cart} = useContext(AppContext);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="home-nav">
      <img src={amazon} className="amazon-logo" />

      <p>
        Address: <br />
        Muzaffarpur, Bihar
      </p>
      <div className="home-nav-serch">
        <select></select>
        <input onChange={handleSearch}></input>
        <button className="bttn" onClick={openSearchPage}>
          <IoSearchSharp />
        </button>
      </div>

      <div className="signbtn">
        <h6>Hello, sign in</h6>
        <h4>Account & Lists</h4>
      </div>
      <div style={{"position":"relative", "margin-right":"10px"}}  title={JSON.stringify(cart)}>
        <FaShoppingCart className="textdec" />

        <span className="count-product">0</span>
      </div>
    </nav>
  );
};

export default NavBar;
