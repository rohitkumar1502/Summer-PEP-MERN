import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const useGetFileFolders = (folderStructure) => {
  const { token } = useSelector((e) => e.auth);
  const [fileFolders, setFileFolders] = useState([]);
  const getFileFolders = async (parentId = null) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/file-folder`, {
        method: 'POST',
        body: JSON.stringify({parentId}),
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + token,
        },
      });

      const data = await res.json();
      setFileFolders(data.data.fileFolders);
     
    } catch (err) {
      alert(err.message);
    }
   
  };

  return { getFileFolders, fileFolders };
};

export default useGetFileFolders;
