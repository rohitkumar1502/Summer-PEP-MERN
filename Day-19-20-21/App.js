import ReactDOM from "react-dom/client";
import { useState } from "react";
const parent = document.querySelector("#root");
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(parent);
import "./style.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazoneSearchPage";
import ProductInfo from "./src/components/productInfo";

const Catoge = [
  "Fresh",
  "Amazon miniTV",
  "Sell",
  "Best Sellers",
  "Mobiles",
  "Today's Deals",
  "Prime Fashion Electronics",
  "Customer Service",
  "New Releases Amazon Pay",
  "Home & Kitchen",
];

const productInfoCard = [
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    product: [
      {
        title: "Air conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    product: [
      {
        title: "Air conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    product: [
      {
        title: "Air conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    product: [
      {
        title: "Air conditioners",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
      },
      {
        title: "Refrigerators",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
      },
      {
        title: "Microwaves",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
      },
      {
        title: "Washing machines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
      },
    ],
  },
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [product, setProducts] = useState([]);
  // return <div>{HomePage()}</div>;

  // return (
  //   <div>
  //     {/* <HomePage Catoge= {Catoge} productInfoCard= {productInfoCard} />
  //     <SearchPage Catoge= {Catoge} /> */}
  //     {/* <Revision Catoge= {Catoge}/> */}

  //   </div>
  // );
  async function getData() {
    // const val = e.target.value;
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`
    );
    const data = await res.json();
    setProducts(data.products);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          product={product}
          getData={getData}
          searchText={searchText}
          setSearchText={setSearchText}
          Catoge={Catoge}
          productInfoCard={productInfoCard}
        />
      ),
    },
    {
      path: "search",
      element: (
        <SearchPage
          product={product}
          getData={getData}
          Catoge={Catoge}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      ),
    },
    {
      path: "search/:id",
      element: <ProductInfo getData={getData} product={product} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

// root.render(App())
root.render(<App />);
