import "./styles.css";
import { useDispatch } from "react-redux";
import { appLogout } from "../../store/slices/authSlice";
import { BiSolidServer } from "react-icons/bi";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(appLogout());
  };

  return (
    <div className="navbar-caontainer">
      <div className="SolidStore">
        <BiSolidServer size={22.75}/>
        <p>Storage</p>
      </div>
      <input type= "text" placeholder="Search here..." />
      <div className="profile-container">
        
        <p>Rohit Kumar</p>
        <div className="profile">
            <p className="first-name-first-later">R</p>

        </div>

      </div>
      {/* <div className="navbar-right-items">
        <button onClick={handleLogout}>Logout</button>
      </div> */}
    </div>
  );
};

export default Navbar;
