import { useContext } from "react";
import CartCtx from "../Contexts/CartCtx/CartContext";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartCtx);

  return (
    <>
      {cartCtx.cartData.cartList.map((product) => (
        <CartItem
          key={product.id}
          name={product.name}
          price={product.price}
          amount={product.amount}
        />
      ))}
      <div className={styles.confirm}>
        <button onClick={() => props.onHide(false)}>CLOSE</button>
        <button>BUY</button>
      </div>
    </>
  );
};

export default Cart;
