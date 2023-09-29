import React from "react";
import { Tooltip } from "@mui/material";
import { ProductAction } from "../ProductAction/ProductAction";

export const ProductItem = ({
  product,
  cart,
  setCart,
  inventory,
  setInventory,
  setProducts,
  products,
  isItCompare,
}) => {
  const stock = inventory?.find(
    (inventoryItem) => inventoryItem.productId === product.id
  );

  return (
    <div className="product">
      <div className="container">
        <div>
          <img className="img" alt="product" src={product.thumbnail}></img>
        </div>
        <div className="body">
          <div className="titleContainer">
            <Tooltip
              placement="top"
              title={product.title.length > 20 ? product.title : ""}
            >
              <div className="title">{product.title}</div>
            </Tooltip>

            <div className="category">
              <div className="categoryName">{product.category}</div>
            </div>
          </div>
          <Tooltip
            placement="top"
            title={product.description.length > 50 ? product.description : ""}
          >
            <div className="descContainer">{product.description}</div>
          </Tooltip>
          <ProductAction
            product={product}
            inventory={inventory}
            setInventory={setInventory}
            setCart={setCart}
            products={products}
            setProducts={setProducts}
            cart={cart}
            stock={stock}
            isItCompare={isItCompare}
          />
          {stock && stock.stock < 3 && (
            <div className="stockLeft">
              Only {stock.stock}
              {stock.stock > 1 ? " Products are" : " Product is"} left!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
