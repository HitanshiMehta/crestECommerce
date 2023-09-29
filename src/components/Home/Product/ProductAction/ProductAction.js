import { Tooltip } from "@mui/material";
import React from "react";
import { ReactComponent as Comparison } from "../../../../assets/svg/Comparison.svg";
import "../../Product/ProductCard/productCard.scss";
import { ProductCart } from "../ProdutCart/ProductCart";

export const ProductAction = ({
  product,
  inventory,
  setInventory,
  setCart,
  products,
  setProducts,
  cart,
  stock,
  isItCompare,
}) => {
  const compareCount = products?.filter((pro) => pro.isAddedInCompare)?.length;

  const handleCompareClick = () => {
    const productDetails = [...products];
    const proIndex = productDetails.findIndex((pro) => pro.id === product.id);
    if (compareCount < 3) {
      productDetails[proIndex].isAddedInCompare =
        !productDetails[proIndex].isAddedInCompare;
    } else if (compareCount === 3) {
      productDetails[proIndex].isAddedInCompare = false;
    }
    setProducts(productDetails);
  };

  return (
    <div className="actionContainer">
      <div className="price">₹{parseInt(product.price, 10).toFixed(2)}</div>
      {!isItCompare && (
        <div className="actions">
          <Tooltip
            title={
              compareCount === 3 ? "Maximum only 3 items can be selected!" : ""
            }
          >
            <div
              className={`${product.isAddedInCompare ? "active " : ""}compare`}
              onClick={handleCompareClick}
            >
              <Comparison />
            </div>
          </Tooltip>
          <ProductCart
            product={product}
            inventory={inventory}
            setInventory={setInventory}
            setCart={setCart}
            cart={cart}
            stock={stock}
          />
        </div>
      )}
    </div>
  );
};
