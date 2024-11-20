import React from "react";
import products from "../../api/products.json";
import BeforeCart from "./CartButtons/BeforeCart";
import AfterCart from "./CartButtons/AfterCart";
import { useSelector } from "react-redux";
import CartButtons from "./CartButtons";

const ProductList = () => {
  const { cartCount,cartList } = useSelector((state) => state.cart);

  console.log(cartList,'clist');
  
  return (
    <div className="container flex items-center justify-around ">
      {products?.map((product, key) => (
        <div className="flex flex-col gap-4 p-8 w-1/4 " key={key}>
          <img className="h-[450px]" src={product?.image} />
          <span className="text-2xl">{product?.title} </span>
                <CartButtons  productID={product.id}/>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
