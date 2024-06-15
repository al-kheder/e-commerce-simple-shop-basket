import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContex";

export const BasketProduct = ({ product }) => {
  const { removeFromBasket } = useContext(StoreContext);
  const handlRemove = () => {
    removeFromBasket(product);
  };
  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <img src={product.thumbnail} alt="" className="w-40" />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{product.title}</p>
        <p className="text-lg">$ {product.price.toFixed(2)}</p>
      </div>
      <button
        className="bg-gray-500 text-white text-lg font-medium rounded-lg p-1 m-2 hover:bg-red-500"
        onClick={handlRemove}
      >
        Remove
      </button>
    </div>
  );
};
