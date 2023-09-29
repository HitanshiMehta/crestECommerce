import React from "react";
import { ProductItem } from "../Home/Product/ProductCard/ProductCard";
import "../Home/Product/product.scss";

export const Compare = ({ products, isItCompare }) => {
  return (
    <div className="productContainer product-cart">
      {products
        .filter((product) => product.isAddedInCompare)
        .map((pro) => {
          return <ProductItem product={pro}  isItCompare={isItCompare}/>;
        })}
    </div>
  );
};
