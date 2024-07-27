import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import NewBtn from "./newbtn";
import { MdCreateNewFolder } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";

const DroupDownNew = (props) => {
  const [open, setOpen] = useState(false);
  const { handleAllowCreateFolder, handleFileUpload } = props;
  let menuRef = useRef();
  const inputRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const createFolderHandler = () => {
    handleAllowCreateFolder(); // Call the handleAllowCreateFolder function
    setOpen(false); // Close the dropdown after creating the folder
  };

  const handleFileUploadHandler = () => {
    handleFileUpload();
    setOpen(false);
  };

  return (
    <div className="App1">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <NewBtn />
        </div>

        <div className={`dropdown-menu1 ${open ? "active" : "inactive"}`}>
          <ul>
            <li className="dropdownItem1" onClick={createFolderHandler}>
              <div className="crete-ctn">
                <MdCreateNewFolder size={20} /> Create Folder
              </div>
            </li>
            <li className="dropdownItem1" onChange={handleFileUpload}>
              <div className="crete-ctn" >
                <FaFileUpload size={24} />
                <input ref={inputRef} type="file"  />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DroupDownNew;
