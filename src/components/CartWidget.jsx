import React from 'react'

const CartWidget = ({counter}) => {
  return (
    <div>
      <span>🛒</span>
      <span>{counter}</span>
    </div>
  )
}

export default CartWidget