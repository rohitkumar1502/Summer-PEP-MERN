import { IoSearchSharp } from "react-icons/io5";
const NavBarR = ({ setText }) => {
  return (
    // <div>
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setText(e.target.value);
    //     }}
    //   />
    // </div>
    <>
      <nav className="home-nav">
        <h4>Amazone</h4>

        <p>
          Address: <br />
          LPU
        </p>
        <div className="home-nav-serch">
          <select></select>
          <input onChange={(e) => {
          setText(e.target.value);
        }}></input>
          <button>
            <IoSearchSharp />
          </button>
        </div>

        <a>About Us</a>
      </nav>
      
    </>
  );
};

export default NavBarR;
