import React, { useContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import AuthCtx from "./components/Contexts/AuthCtx/AuthContext";
import CartProvider from "./components/Contexts/CartCtx/CartProvider";
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

  const getDataProdcut = (id, title, price, desc) => {
    product = { id: id, name: title, price: price, description: desc };
    setIsViewProduct(true);
  };

  const handleCart = (value) => {
    setIsCartShown(value);
  };

  const falseView = () => {
    setIsViewProduct(false);
  };

  return (
    <>
      {!authCtx.userData && <Login />}
      {authCtx.userData && (
        <CartProvider>
          {isCartShown && (
            <Overlay>
              <Cart onHide={handleCart} />
            </Overlay>
          )}
          <Header onView={handleCart} onBack={falseView} />
          {!isViewProduct && <Dasboard onGet={getDataProdcut} />}
          {isViewProduct && (
            <ViewProduct
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              onBack={falseView}
            />
          )}
        </CartProvider>
      )}
    </>
  );
}

export default App;
