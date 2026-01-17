import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null); // Capitalize S
const getDefaultCart = ()=>{
        let cart = {};
        for(let index = 0; index < all_product.length+1; index++){
            cart[index] = 0;

        }
        return cart;
    }
const ShopContextProvider = (props) => { // Capitalize S
    const [cartItems, setCartItems] = useState(getDefaultCart());
        const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
};

const removeFromCart = (itemId) => {
    setCartItems((prev) => {
        // Safety check: only subtract if the item is actually in the cart
        const currentQty = prev[itemId];
        const newQty = currentQty > 0 ? currentQty - 1 : 0;
        return { ...prev, [itemId]: newQty };
    });
};

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
        }
    }
    return totalAmount;
}

const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            totalItem += cartItems[item];
        }
    }
    return totalItem;
};

// Add the function to your contextValue object
const contextValue = { 
    getTotalCartItems, 
    all_product, 
    cartItems, 
    addToCart, 
    removeFromCart, 
    getTotalCartAmount 
};    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ) 
}

export default ShopContextProvider;