import { useReducer } from "react";
import CartCtx from "./CartContext";

const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    let newArr = [];

    if (prevState.cartList.length > 0) {
      let isProductAlready = false;
      for (const product of prevState.cartList) {
        if (product.id === action.product.id) {
          isProductAlready = true;
        }
      }
      if (isProductAlready) {
        const indexProduct = prevState.cartList.findIndex(
          (product) => product.id === action.product.id
        );
        const newAmount =
          prevState.cartList[indexProduct].amount + action.amount;
        newArr = [
          ...prevState.cartList.filter(
            (product) => product.id !== action.product.id
          ),
          { ...prevState.cartList[indexProduct], amount: newAmount },
        ];
        let totalPrice = 0;
        for (const product of newArr) {
          totalPrice += product.price * product.amount;
        }
        return {
          cartList: newArr,
          totalPrice: totalPrice,
        };
      } else {
        let totalPrice = 0;
        for (const product of newArr) {
          totalPrice += product.price * product.amount;
        }
        newArr = [
          ...prevState.cartList,
          { ...action.product, amount: action.amount },
        ];
        return {
          cartList: newArr,
          totalPrice: totalPrice,
        };
      }
    } else {
      newArr = [{ ...action.product, amount: action.amount }];
      return {
        cartList: newArr,
        totalPrice: action.product.price,
      };
    }
  }
  if (action.type === "REMOVE") {
  }
};

const CartProvider = (props) => {
  const [cartData, dispatchCartData] = useReducer(cartReducer, {
    cartList: [],
    totalPrice: 0,
  });

  const addItemHandler = (product, amount) => {
    dispatchCartData({ type: "ADD", product: product, amount: amount });
  };

  const cartProviderValue = {
    cartData: cartData,
    addCartItem: addItemHandler,
    emoveCartItem: () => {},
  };
  return (
    <CartCtx.Provider value={cartProviderValue}>
      {props.children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
