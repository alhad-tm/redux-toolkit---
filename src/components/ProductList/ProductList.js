import React from "react";
import products from "../../api/products.json";
import { useSelector } from "react-redux";
import CartButtons from "./CartButtons";

const ProductList = () => {
  const { cartList } = useSelector((state) => state.cart); 

  console.log(cartList,"===cartList");
  
  return (
    <div className="container flex items-center justify-around ">
      {products?.map((product, key) => (
        <div className="flex flex-col gap-4 p-8 w-1/4 " key={key}>
          <img className="h-[450px]" src={product?.image} alt="img"/>
          <span className="text-2xl">{product?.title} </span>
                <CartButtons  product={product}/>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
