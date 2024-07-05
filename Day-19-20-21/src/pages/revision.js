import { useState, useEffect } from "react";

import NavBarR from "../components/navbarR";

const Revision = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [color, setColor] = useState([])

  const getData = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${text}`);
    const data = await res.json();
    console.log(data);
    setData(data.products)
  };
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   };

  useEffect(() => {
    getData();
  }, [text]);

  const handleColorChange = ()=>{
    const num = Math.floor(Math.random() *255)
    setColor(`rgb(${num},${num},${num})`)
  }
  return (
    <>
      <div>
        <div onClick= {handleColorChange}>
            <NavBarR  setText={setText}/>
        </div>
        <h2 style={{backgroundColor:color}}>{text}!</h2>
        <div>
            {data.map((elem)=>{
                return<h3>{elem.title}</h3>
            })}
        </div>
      </div>
    </>
  );
};

export default Revision;
