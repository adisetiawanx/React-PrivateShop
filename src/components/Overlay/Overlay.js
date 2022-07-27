import React from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = () => {
  const portalElement = document.getElementById("overlay");
  const overlay = (
    <React.Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.title}>
            <div className={styles.badge}>1x </div>
            <p>Machine Learning</p>
          </div>
          <div className={styles.action}>
            <button>+</button>
            <button>-</button>
            <p>$10</p>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.title}>
            <div className={styles.badge}>1x </div>
            <p>Machine Learning</p>
          </div>
          <div className={styles.action}>
            <button>+</button>
            <button>-</button>
            <p>$10</p>
          </div>
        </div>
        <div className={styles.confirm}>
          <button>CLOSE</button>
          <button>BUY</button>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(overlay, portalElement)}
    </React.Fragment>
  );
};

export default Overlay;
