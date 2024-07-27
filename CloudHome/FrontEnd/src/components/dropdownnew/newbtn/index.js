import { FaPlusSquare } from "react-icons/fa";
import './style.css'

const NewBtn = () => {
  return (
    <div className="new-caonter">
      <FaPlusSquare color="white" />
      <p className="new-text">New</p>
    </div>
  );
};

export default NewBtn