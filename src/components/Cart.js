import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector(store => store.cart.)
  return (
    <div>Cart</div>
  )
}

export default Cart