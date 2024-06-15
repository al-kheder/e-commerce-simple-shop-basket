import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContex";

export const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);
  const handleAdd = () => {
    addToBasket(item);
  };

  return (
    <div className="mx-auto px-8 border border-gray-200 rounded-lg">
      <img src={item.thumbnail} alt="" />
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xl">{item.title}</p>
          <p className="text-lg">${item.price}</p>
        </div>
        <button
          className="bg-indigo-500 text-white text-lg font-medium rounded-full p-4 py-1 mb-2"
          onClick={handleAdd}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};
