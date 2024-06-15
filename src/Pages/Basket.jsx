import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContex";
import { BasketProduct } from "../components/BasketProduct";

export const Basket = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div>
      <div className="flex flex-row items-center justify-around mt-2 py-6 px-5 text-xl font-medium">
        <h2>Your Basket</h2>
        <p>Total: $ {total.toFixed(2)}</p>
      </div>
      <hr />
      {products.map((product, i) => {
        return <BasketProduct key={i} product={product} />;
      })}
    </div>
  );
};
