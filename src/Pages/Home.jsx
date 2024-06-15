import React, { useState } from "react";

import { Navbar } from "../components/Navbar";
import { Product } from "../components/Product";
import Data from "../../Data.json";
export const Home = () => {
  // const [products, setProducts] = useState(Data.products);
  console.log(Data.products);
  return (
    <div>
      <h1 className="text-3xl text-center mt-4">
        useContext + useReducer Store
      </h1>
      <h2 className="text-4xl tracking-wide py-4 pl-8">New In</h2>
      <hr />
      <div className="flex flex-col lg:grid lg:gtid-cols-3 mt-2 px-8">
        {Data.products.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
