import React, { createContext, useContext } from 'react'

function Cart({onCheckout}) {
    const {cart , setcart} = useContext(cartContext)
    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (sum,item) => sum + (item.price * (item.quantity || 1)), 0);
    
    const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    }      
    const handleClearCart = () => {
    setCart([]);
    }

  return (
    <div>Cart</div>
  )
}

export default Cart