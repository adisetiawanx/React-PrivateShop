import React, { useContext } from "react";
import AuthCtx from "../Contexts/AuthCtx/AuthContext";
import styles from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthCtx);

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
        0 Cart
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
