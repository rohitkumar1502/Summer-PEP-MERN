import { IoSearchSharp } from "react-icons/io5";

const NavBar = ({setSearchText, openSearchPage}) => {
  // const {setProducts}= props

  const handleSearch = (e) =>{
    setSearchText(e.target.value)
  }
 


  return (
    <nav className="home-nav">
      <h4>Amazone</h4>

      <p>
        Address: <br />
        LPU
      </p>
      <div className="home-nav-serch">
        <select></select>
        <input onChange={handleSearch}></input>
        <button onClick= {openSearchPage}>
          <IoSearchSharp />
        </button>
      </div>

      <a>About Us</a>
    </nav>
  );
};

export default NavBar
