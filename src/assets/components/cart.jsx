import React, { createContext, useContext } from 'react'

function Cart({onCheckout}) {
    const {cart , setcart} = useContext(cartContext)
    const navigate = useNavigate();

    




  return (
    <div>Cart</div>
  )
}

export default Cart