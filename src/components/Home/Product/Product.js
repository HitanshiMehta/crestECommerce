import React from "react";
import "./product.scss";
import { ProductItem } from "./ProductCard/ProductCard";

export const Product = ({
  tableView,
  cart,
  setCart,
  inventory,
  setInventory,
  products,
  setProducts,
}) => {
  return (
    <div className={`${tableView ? "product-cart" : ""} productContainer`}>
      {products.map((product) => {
        return (
          <ProductItem
            product={product}
            products={products}
            tableView={tableView}
            cart={cart}
            setCart={setCart}
            inventory={inventory}
            setInventory={setInventory}
            setProducts={setProducts}
          />
        );
      })}
    </div>
  );
};
