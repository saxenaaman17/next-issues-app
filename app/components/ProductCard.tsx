import React from "react";
import AddToCart from "./AddToCart";
// import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div>
      <h1>Product Card</h1>
      {/* <div className="p-5 my-5 bg-sky-400 text-white text-lg hover:bg-sky-500">
        <AddToCart />
      </div> */}
      <div>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
