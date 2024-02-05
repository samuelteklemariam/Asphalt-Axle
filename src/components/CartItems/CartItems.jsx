import React, { useContext, useEffect} from 'react';
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext);

      // Use state to trigger a re-render when the cart is updated
//   const [cartItemsState, setCartItemsState] = useState(CartItems);

  // Use useEffect to update cartItemsState when cartItems changes
  useEffect(() => {
    // setCartItemsState(CartItems);
  }, [CartItems]);


  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        <div>
            <p>b</p>
             {/* Check if all_product is defined before mapping */}
       { all_product.map((e)=>{

// Safely accessing the quantity in the cart, defaulting to 0 if not found
const quantityInCart = CartItems && CartItems[e.id] ? CartItems[e.id] : 0;


 // Check if CartItems[e.id] and other necessary properties are defined   
if( quantityInCart > 0)
    {
      return  <div  key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                      <img src={e.image} alt="" className='carticon-product-icon' />
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className='cartitems-quantity'>{quantityInCart}</button>
                      <p>${e.new_price*quantityInCart}</p>
                      <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                  </div>
                  <hr />
              </div>        
    }
   
   
    return <p  key={e.id}>{e.name}</p>; 
    
    })}
    <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Cart Total</h1>
        <div>
        <div className="cartitems-total-item">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <h3>Total</h3>
          <h3>${getTotalCartAmount()}</h3>
        </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      
        <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
    

    </div>  

    
    </div>
  )
}

export default CartItems;
