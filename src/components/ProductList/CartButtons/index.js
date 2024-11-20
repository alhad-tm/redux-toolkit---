import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import React from 'react'

const CartButtons = ({productID}) => {
    console.log(productID,"p id");
    
  return (
    <div>
   <AfterCart />  <BeforeCart  />
    </div>
  )
}

export default CartButtons

