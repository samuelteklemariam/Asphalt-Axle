import React, {createContext, useState} from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

//function to create an empty cart where our key values will be our 
    //object ID and the product value will be the quantity of objects we have added
    //to the cart


    const getDefaultCart = ()=>{
        let cart = {};
       
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart;
    }

const ShopContextProvider = (props) => {
 
    const [cartItems,setCartItems] = useState(getDefaultCart());

    // const addToCart = (itemId) => {
    //     setCartItems((prev) => {
    //       // Create a copy of the previous state
    //       const newCart = { ...prev };
      
    //       // If the item is already in the cart, increment the quantity
    //       if (newCart[itemId]) {
    //         newCart[itemId] += 1;
    //       } else {
    //         // If the item is not in the cart, add it with quantity 1
    //         newCart[itemId] = 1;
    //       }
      
    //       // Log the updated cart for debugging
    //       console.log(newCart);
      
    //       // Return the updated cart
    //       return newCart;
    //     });
    //   };
      
    const addToCart = (itemId) => {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      console.log(cartItems);
    }
    

    //remove from cart
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    //calculate cart total
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems)
      {
        let itemInfo = all_product.find((product)=>product.id===Number(item))
        if (itemInfo && itemInfo.new_price){
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
      return totalAmount;
    }

    //count the total number of items in the cart
    const getTotalCartItems = () => {
      let totalItem = 0;
      for (const item in cartItems)
      {
        if(cartItems[item]>0)
        {
          totalItem += cartItems[item];
        }
      }
      return totalItem;
    }


    const contextValue = {getTotalCartItems,getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;