import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.title}>
          <div className={styles.badge}>{props.amount}x</div>
          <p>{props.name}</p>
        </div>
        <div className={styles.action}>
          <button>+</button>
          <button>-</button>
          <p>${props.price * props.amount}</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
