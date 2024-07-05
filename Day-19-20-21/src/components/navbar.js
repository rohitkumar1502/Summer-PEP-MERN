import { IoSearchSharp } from "react-icons/io5";

const NavBar = (props) => {
  const {setProducts}= props
  
  async function getData(e) {
    const val = e.target.value;
    const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
    const data = await res.json();
    setProducts(data.products);
    console.log("API! Called");
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
