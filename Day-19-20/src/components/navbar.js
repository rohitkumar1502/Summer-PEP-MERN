import { IoSearchSharp } from "react-icons/io5";

const NavBar = (props) => {
  const {getData} = props;


  return (
    <nav className="home-nav">
      <h4>Amazone</h4>

      <p>
        Address: <br />
        LPU
      </p>
      <div className="home-nav-serch">
        <select></select>
        <input onChange={getData}></input>
        <button>
          <IoSearchSharp />
        </button>
      </div>

      <a>About Us</a>
    </nav>
  );
};

export default NavBar
