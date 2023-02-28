import React, {createContext, useState } from 'react'
// import { Button } from 'bootstrap'
import { Products } from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {

  const [cartItems, useCartItems] = useState(getDefaultCart());

  const GetTotalPrice = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return total; 
  }

  const AddItemToCart = (itemId) => {
    useCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const RemoveItemFromCart = (itemId) => {
    useCartItems((prev) => ({...prev ,[itemId]: prev[itemId] - 1}))
  }

  const UpdateItemAmount = (newAmount, itemId) => {
      useCartItems((prev) => ({...prev ,[itemId]: newAmount}))
  }
  const contextValue = { cartItems, AddItemToCart, RemoveItemFromCart, UpdateItemAmount,GetTotalPrice};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
