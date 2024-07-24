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
import AppContext from "./src/contexts/appContext";
import SignUpPage from "./src/pages/signUppage";
import LogIn from "./src/pages/logInPage";

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

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: !loggedInUser? <SignUpPage /> : <HomePage />,
    },
    {
      path: "search",
      element:!loggedInUser? <SignUpPage /> : <SearchPage />,
    },
    {
      path: "search/:id",
      element:!loggedInUser? <SignUpPage /> : <ProductInfo />,
    },
    {
      path: "signup",
      element: loggedInUser? <HomePage/>: <SignUpPage />
    },
    {
      path: "login",
      element:loggedInUser? <HomePage/>: <LogIn />
    }
  ]);

  const addToCart = (elem) => {
    console.log(elem);
    const isPresent = cart.findIndex((cI) => cI.id === elem.id);
    if (isPresent === -1) {
      const newCart = [...cart];
      newCart.push({
        title: elem.title,
        id: elem.id,
        price: elem.price,
        count: 1,
      });
      setCart(newCart);
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === elem.id) {
          const newCartItem = { ...cartItem };
          newCartItem.count = newCartItem.count + 1;
          return newCartItem;
        } else return cartItem;
      });
      setCart(newCart);
    }
  };

  const appLogin = (user) => {
    setLoggedInUser(user);
};

  const contextValues = {
    loggedInUser,
    cart,
    addToCart,
    Catoge,
    searchText,
    setSearchText,
    appLogin,
  };
  console.log("State", loggedInUser);
  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} />;
    </AppContext.Provider>
  );
};

// root.render(App())
root.render(<App />);
