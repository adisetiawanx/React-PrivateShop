import React, { useContext } from "react";
import AuthCtx from "../Contexts/AuthCtx/AuthContext";
import CartCtx from "../Contexts/CartCtx/CartContext";
import styles from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthCtx);
  const { cartData } = useContext(CartCtx);
  const totalProduct = cartData.cartList.map((item) => {
    let total = 0;
    total += item.amount;
    return total;
  });

  const buttonLogoutHandler = () => {
    props.onBack();
    authCtx.logoutHandler();
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.cart}
        onClick={() => {
          props.onView(true);
        }}
      >
        {totalProduct < 1 ? "0" : totalProduct} Item
      </button>
      <div className={styles.detail}>
        <h4>Welcome, Adi</h4>
        <button className={styles.logout} onClick={buttonLogoutHandler}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Header;
