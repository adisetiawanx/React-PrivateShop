import React, { useContext, useRef, useState } from "react";
import CartCtx from "../../Contexts/CartCtx/CartContext";
import styles from "./ViewProduct.module.css";

const ViewProduct = (props) => {
  const [amountProduct, setAmountProduct] = useState(1);
  const amountRef = useRef();
  const cartCtx = useContext(CartCtx);

  const inputAmountHandler = () => {
    if (amountRef.current.value > 0) {
      setAmountProduct(+amountRef.current.value);
    }
  };

  const addProductHandler = () => {
    const product = {
      id: props.id,
      name: props.name,
      price: props.price,
    };
    cartCtx.addCartItem(product, amountProduct);
  };

  const increaseAmounHandler = () => {
    setAmountProduct((prevState) => {
      return prevState + 1;
    });
  };

  const decreaseAmounHandler = () => {
    if (amountProduct > 1) {
      setAmountProduct((prevState) => {
        return prevState - 1;
      });
    }
  };

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
        <img className={styles.images} src={props.img} alt="Homepage" />
        <div>
          <h2>{props.name}</h2>
          <h4>{props.price}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={styles.buy}>
        <input
          onChange={inputAmountHandler}
          ref={amountRef}
          value={amountProduct}
          type="number"
          placeholder="1"
        />
        <button onClick={increaseAmounHandler}>+</button>
        <button onClick={decreaseAmounHandler}>-</button>
        <button onClick={addProductHandler}>ADD</button>
      </div>
    </div>
  );
};

export default ViewProduct;
