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
        let newArr = [...prevState.cartList];
        const updatedProduct = {
          ...prevState.cartList[indexProduct],
          amount: newAmount,
        };
        newArr[indexProduct] = updatedProduct;
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
    let productIndex = null;
    for (const [index, product] of prevState.cartList.entries()) {
      if (product.id === action.id) {
        productIndex = index;
      }
    }
    if (prevState.cartList[productIndex].amount > 1) {
      const newAmount = prevState.cartList[productIndex].amount - 1;
      let newArr = [...prevState.cartList];
      const updatedProduct = {
        ...prevState.cartList[productIndex],
        amount: newAmount,
      };
      newArr[productIndex] = updatedProduct;
      let totalPrice = 0;
      for (const product of newArr) {
        totalPrice += product.price * product.amount;
      }
      return {
        cartList: newArr,
        totalPrice: totalPrice,
      };
    }
    const newArr = [
      ...prevState.cartList.filter((product) => product.id !== action.id),
    ];
    let totalPrice = 0;
    for (const product of newArr) {
      totalPrice += product.price * product.amount;
    }
    return {
      cartList: newArr,
      totalPrice: totalPrice,
    };
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

  const removeItemHandler = (id) => {
    dispatchCartData({ type: "REMOVE", id: id });
  };

  const cartProviderValue = {
    cartData: cartData,
    addCartItem: addItemHandler,
    removeCartItem: removeItemHandler,
  };
  return (
    <CartCtx.Provider value={cartProviderValue}>
      {props.children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
