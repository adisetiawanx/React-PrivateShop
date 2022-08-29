import { useContext } from "react";
import CartCtx from "../../Contexts/CartCtx/CartContext";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartCtx);

  return (
    <>
      <div className={styles.product}>
        <div className={styles.title}>
          <div className={styles.badge}>{props.product.amount}x</div>
          <p>{props.product.name}</p>
        </div>
        <div className={styles.action}>
          <button onClick={() => cartCtx.addCartItem(props.product, 1)}>
            +
          </button>
          <button
            onClick={() => {
              cartCtx.removeCartItem(props.product.id);
            }}
          >
            -
          </button>
          <p>${props.product.price * props.product.amount}</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
