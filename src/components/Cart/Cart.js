import { useContext } from "react";
import CartCtx from "../Contexts/CartCtx/CartContext";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartCtx);

  return (
    <>
      {cartCtx.cartData.cartList.length > 0 &&
        cartCtx.cartData.cartList.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            amount={product.amount}
          />
        ))}
      {!cartCtx.cartData.cartList.length > 0 && <h5>No Item Here...</h5>}
      <div className={styles.confirm}>
        <button onClick={() => props.onHide(false)}>CLOSE</button>
        <button>BUY</button>
      </div>
    </>
  );
};

export default Cart;
