import React from "react";
import { Header } from "../Header/Header";
import "../Home/Product/product.scss";
import { ProductItem } from "../Home/Product/ProductCard/ProductCard";

export const Cart = ({
  cart,
  setCart,
  inventory,
  setInventory,
  products,
  setProducts,
}) => {
  return (
    <>
      <div className="productContainer product-cart">
        {cart?.length &&
          cart
            .filter((item) => item.itemAdded > 0)
            .map((product) => {
              return (
                <ProductItem
                  product={product}
                  products={products}
                  cart={cart}
                  setCart={setCart}
                  inventory={inventory}
                  setInventory={setInventory}
                  setProducts={setProducts}
                />
              );
            })}
      </div>
    </>
  );
};
