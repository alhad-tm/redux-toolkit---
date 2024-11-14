import React, { useState } from "react";
import products from "../../api/products.json";
import BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";

const ProductList = ({addToCart,addCount,count,lessCount}) => {

  
  return (
    <div className="container flex items-center justify-around ">
      {products.map((product, key) => (
        <div className="flex flex-col gap-4 bg-yellow-700 p-8 " key={key}>  
          <img className="w-[220px] h-[280px]" src={product.image} />
          <span className="text-2xl">{product.title} </span>
 
 {count>0 ?  <AfterCart addCount={addCount} count={count} lessCount={lessCount}/> : <BeforeCart  addToCart={addToCart}/> }          
     
         
        </div> 
       
      ))}
     
    </div>
  );
};

export default ProductList;
