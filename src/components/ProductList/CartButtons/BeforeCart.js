import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart";

const BeforeCart = ({product}) => { 

    const dispatch=useDispatch()

  
 
  return ( 
    <div>
      <button onClick={()=>dispatch(addToCart(product))}  
      className="p-4 bg-violet-700 text-white">Add To cart</button>
    </div>
  );  
};

export default BeforeCart;
  