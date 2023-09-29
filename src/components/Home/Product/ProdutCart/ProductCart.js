import React from "react";
import "../../Product/ProductCard/productCard.scss";

export const ProductCart = ({
  product,
  inventory,
  setInventory,
  setCart,
  cart,
  stock,
}) => {
  const cartProduct = cart?.find((item) => item.id === product.id);
  const handleAddToCart = (action) => {
    if (!cartProduct) {
      const findInventoryIndex = inventory.findIndex(
        (item) => item.id === product.id
      );
      const inventoryDetail = [...inventory];
      inventoryDetail[findInventoryIndex].stock -= 1;
      setInventory(inventoryDetail);
      setCart((cartItem) => {
        return [...cartItem, { ...product, itemAdded: 1 }];
      });
    } else {
      changeCartProduct(action);
    }
  };
  const changeCartProduct = (action) => {
    const findProIndex = cart.findIndex((item) => item.id === product.id);
    const findInventoryIndex = inventory.findIndex(
      (item) => item.id === product.id
    );
    const cartDetail = [...cart];
    const inventoryDetail = [...inventory];
    if (action === "add" && inventoryDetail[findInventoryIndex].stock > 0) {
      cartDetail[findProIndex].itemAdded += 1;
      inventoryDetail[findInventoryIndex].stock -= 1;
    } else if (action === "sub") {
      cartDetail[findProIndex].itemAdded -= 1;
      inventoryDetail[findInventoryIndex].stock += 1;
    }
    setCart(cartDetail);
    setInventory(inventoryDetail);
  };
  return !cartProduct?.itemAdded ? (
    <button className="addToCart" onClick={() => handleAddToCart("add")}>
      Add to cart
    </button>
  ) : (
    <div className="cartItemContainer">
      <div
        className="cartItem"
        onClick={() => {
          handleAddToCart("sub");
        }}
      >
        -
      </div>
      <div className="cartItem added">{cartProduct?.itemAdded}</div>
      <div
        className="cartItem"
        onClick={() => handleAddToCart("add")}
        style={{
          opacity: stock?.stock > 0 ? 1 : 0.5,
          cursor: stock?.stock > 0 ? "pointer" : "not-allowed",
        }}
      >
        +
      </div>
    </div>
  );
};
