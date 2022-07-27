import React from "react";
import homepage from "../../../assets/images/homepage.jpg";
import styles from "./ViewProduct.module.css";

const ViewProduct = (props) => {
  return (
    <div className={styles.container}>
      <p
        className={styles.back}
        onClick={() => {
          props.onBack();
        }}
      >
        <b>Go Back</b>
      </p>
      <div className={styles.product}>
        <img className={styles.images} src={homepage} alt="Homepage" />
        <div>
          <h2>{props.name}</h2>
          <h4>{props.price}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={styles.buy}>
        <input type="number" placeholder="1" />
        <button>+</button>
        <button>-</button>
        <button>ADD</button>
      </div>
    </div>
  );
};

export default ViewProduct;
