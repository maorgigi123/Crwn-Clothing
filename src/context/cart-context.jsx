import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingItem = cartItems.find (
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(existingItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id
        ? {...cartItem, quantity:cartItem.quantity +1 }
        : cartItem 
        );
    }
    return [...cartItems,{...productToAdd, quantity:1}]

}

//remove in 1 from the cart
const removeCartItem = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity === 1)
    {
        return clearCartItem(cartItems,cartItemToRemove);
    }
    
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity:cartItem.quantity -1 }
            : cartItem 
    );
}

//remove from the cart
const clearCartItem = (cartItems, ProductToRemove) =>
{
    return cartItems.filter((item) => item.id !== ProductToRemove.id);
}

export const CardContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    totalPrice: 0

})

export const CardProvider = ({ children }) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount ] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=> {    
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(()=> {    
        const newCartPrice = cartItems.reduce((total,cartItem)=> total + (cartItem.price * cartItem.quantity),0)
        setTotalPrice(newCartPrice);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }
    const clearItemFromCart =(ProductToRemove) => {
        setCartItems(clearCartItem(cartItems,ProductToRemove));
    }

    const value =  {isCartOpen, setIsCartOpen,addItemToCart,cartItems, cartCount, removeItemFromCart,clearItemFromCart,totalPrice};

    return <CardContext.Provider value={value}> {children} </CardContext.Provider>
}