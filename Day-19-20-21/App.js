import ReactDOM from "react-dom/client";
const parent = document.querySelector("#root");

const root = ReactDOM.createRoot(parent);
import "./style.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazoneSearchPage";
import Revision from "./src/pages/revision";


const Catoge = ["Amazon Mini Tv", "Fresh", "Sell", "Best Selller"];

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
  // return <div>{HomePage()}</div>;
  return (
    <div>
      {/* <HomePage Catoge= {Catoge} productInfoCard= {productInfoCard} /> */}
      {/* <SearchPage Catoge= {Catoge} /> */}
      <Revision />

    </div>
  );
};

// root.render(App())
root.render(<App />);

