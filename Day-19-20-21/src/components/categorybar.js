import { GiHamburgerMenu } from "react-icons/gi";

const CatBar = (props) => {
    const {Catoge} = props
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