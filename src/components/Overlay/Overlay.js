import React from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const portalElement = document.getElementById("overlay");
  const overlay = (
    <React.Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.container}>{props.children}</div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(overlay, portalElement)}
    </React.Fragment>
  );
};

export default Overlay;
