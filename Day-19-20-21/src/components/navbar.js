import { IoSearchSharp } from "react-icons/io5";
import amazon from "../../assets/Amazon-India-Logo-PNG-White.png";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = ({ setSearchText, openSearchPage }) => {
  // const {setProducts}= props

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="home-nav">
      <img src={amazon} className="amazon-logo" />

      <p>
        Address: <br />
        Lovely Professional University
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
      <div style={{"position":"relative", "margin-right":"10px"}}>
        <FaShoppingCart className="textdec" />

        <span className="count-product">0</span>
      </div>
    </nav>
  );
};

export default NavBar;
