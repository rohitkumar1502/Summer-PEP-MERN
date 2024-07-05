import { CiMenuBurger } from "react-icons/ci";

const CatBar = (props) => {
    const {Catoge} = props
  return (
    <div className="home-cat">
      <button>
        <CiMenuBurger />
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