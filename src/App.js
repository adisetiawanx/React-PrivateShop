import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import AuthCtx from "./components/Contexts/LoginCtx/AuthCtx";
import Dasboard from "./components/Dashboard/Dashboard";
import ViewProduct from "./components/Dashboard/ViewProduct/ViewProduct";
import Header from "./components/Layout/Header";
import Login from "./components/Login/Login";
import Overlay from "./components/Overlay/Overlay";

let product = {};

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const [isViewProduct, setIsViewProduct] = useState(false);
  const authCtx = useContext(AuthCtx);

  const getDataProdcut = (title, price, desc) => {
    product = { name: title, price: price, description: desc };
    setIsViewProduct(true);
  };

  const falseView = () => {
    setIsViewProduct(false);
  };

  return (
    <>
      {!authCtx.userData && <Login />}
      {authCtx.userData && (
        <>
          {isCartShown && <Overlay />}
          <Header onBack={falseView} />
          {!isViewProduct && <Dasboard onGet={getDataProdcut} />}
          {isViewProduct && (
            <ViewProduct
              name={product.name}
              price={product.price}
              description={product.description}
              onBack={falseView}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
