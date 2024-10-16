import { createContext, useState } from "react";
import all_products from "../ASSETS/frontend/assets/all_products";
/* import Item from "../components/Item"; */

export const ShopContext = createContext<any>(null);

const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;  
  }
  return cart;
};

const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        } else {
          console.warn(`Item with id ${itemId} not found in all_products`);
        }
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalItem += cartItems[itemId];
      }
    }
    return totalItem;
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
