import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContex";
export const Navbar = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="flex justify-around bg-slate-400 text-white font-bold p-3">
      <Link to="/">Home</Link>
      <Link to="basket">Basket
      <span className="text-xs align-top p-1 bg-red-500 rounded-full px-2 m-1">{products.length}</span>
      </Link>
    </div>
  );
};
