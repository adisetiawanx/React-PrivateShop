import React from "react";
import { Products } from "../DummyData/Products";

import styles from "./Dashboard.module.css";

const Dasboard = (props) => {
  return (
    <div className={styles.container}>
      {Products.map((product) => (
        <div className={styles.card} key={product.id}>
          <img className={styles.images} src={product.img} alt="homepage" />
          <h3 className={styles.title}>{product.name}</h3>
          <h4>${product.price}</h4>
          <button
            className={styles.button}
            onClick={() => {
              props.onGet(
                product.id,
                product.name,
                product.price,
                product.img,
                product.description
              );
            }}
          >
            BUY
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dasboard;
