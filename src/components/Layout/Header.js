import React, { useContext } from "react";
import AuthCtx from "../Contexts/LoginCtx/AuthCtx";
import styles from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthCtx);

  const buttonLogoutHandler = () => {
    props.onBack();
    authCtx.logoutHandler();
  };
  return (
    <div className={styles.container}>
      <button className={styles.cart}>0 Cart</button>
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
