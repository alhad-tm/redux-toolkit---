import React from "react";

const BeforeCart = ({addToCart}) => { 
 
  return (
    <div>
      <button onClick={addToCart}  className="p-4 bg-violet-700 text-white">Add To cart</button>
    </div>
  );
};

export default BeforeCart;
