import { useContext } from "react";
import CartCtx from "../../Contexts/CartCtx/CartContext";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartCtx);

  return (
    <>
      <div className={styles.product}>
        <div className={styles.title}>
          <div className={styles.badge}>{props.amount}x</div>
          <p>{props.name}</p>
        </div>
        <div className={styles.action}>
          <button>+</button>
          <button
            onClick={() => {
              cartCtx.removeCartItem(props.id);
            }}
          >
            -
          </button>
          <p>${props.price * props.amount}</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
