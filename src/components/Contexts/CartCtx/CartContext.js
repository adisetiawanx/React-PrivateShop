import { createContext } from "react";

const CartCtx = createContext({
  cartData: {},
  addCartItem: () => {},
  removeCartItem: () => {},
});

export default CartCtx;
