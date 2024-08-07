import { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolders";
import useUploadFile from "../hooks/useUploadFile";
import LeftSideNavBar from "../components/leftsidenavbar";
import "./homePage.css";
import { FaPlusSquare } from "react-icons/fa";
import DroupDownNew from "../components/dropdownnew";

const HomePage = () => {
  const [newFolder, setNewFolder] = useState("");
  const inputRef = useRef(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const { createFolder } = useCreateFolder();
  const [folderStructure, setFolderStructure] = useState([
    { _id: null, name: "My Files" },
  ]);
  const { getFileFolders, fileFolders } = useGetFileFolders();

  const parentFolder = folderStructure[folderStructure.length - 1];

  const handleDoubleClick = (elem) => {
    if (elem.type == "folder") {
      setFolderStructure([...folderStructure, elem]);
    } else {
      window.open(elem.link);
    }
  };

  const handleAllowCreateFolder = () => {
    setShowCreateFolder(true);
  };

  const handleCreateFolder = async () => {
    if (newFolder.length > 0) {
      await createFolder({ name: newFolder, parentId: parentFolder._id });
      getFileFolders(parentFolder._id);
      setShowCreateFolder(false);
    }
  };

  useEffect(() => {
    getFileFolders(parentFolder._id);
  }, [folderStructure]);

  const handleBackClick = (clickIdx) => {
    const newFolderStructure = folderStructure.filter(
      (elem, indx) => indx <= clickIdx
    );
    setFolderStructure(newFolderStructure);
  };

  const { isUploadAllowed, uploadFile } = useUploadFile();
  const handleFileUpload = async (e) => {
    if (isUploadAllowed) {
      const file = e.target.files;
      await uploadFile({
        file: file[0],
        parentId: parentFolder._id,
      });
      getFileFolders(parentFolder._id);
    } else {
      alert("Uploading is already in progress. Please wait...");
    }
  };

  return (
    <div className="main">
      <LeftSideNavBar />
      <Navbar />
      <div>
        <div className="homepage-main-container">
          <p>Recent</p>
         <DroupDownNew handleAllowCreateFolder={handleAllowCreateFolder} handleFileUpload= {handleFileUpload}/>

        </div>
        <ul style={{ display: "flex", padding: "24px", gap: "24px" }}>
          {folderStructure.flatMap((elem, indx) => {
            if (elem.name)
              return <li onClick={() => handleBackClick(indx)}>{elem.name}</li>;
            else return null;
          })}
        </ul>
        <div>
          {showCreateFolder && (
            <div
              style={{
                margin: "24px",
                padding: "24px",
                backgroundColor: "yellow",
              }}
            >
              <input
                value={newFolder}
                onChange={(e) => setNewFolder(e.target.value)}
              />
              <button onClick={handleCreateFolder}>Create</button>
              <button onClick={() => setShowCreateFolder(false)}>Cancel</button>
            </div>
          )}
        </div>
        <div>
          {fileFolders.map((elem) => {
            return (
              <div
                style={{
                  backgroundColor: elem.type === "folder" ? "yellow" : "orange",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  width: "fit-content",
                  padding: "8px 16px",
                  margin: "8px 16px",
                }}
                onDoubleClick={() => handleDoubleClick(elem)}
              >
                <p>{elem.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
