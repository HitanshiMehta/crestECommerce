import React from "react";
import "./homeHeader.scss";

import { ReactComponent as Grid } from "../../../assets/svg/Grid.svg";
import { ReactComponent as Table } from "../../../assets/svg/Table.svg";
import { ReactComponent as Cart } from "../../../assets/svg/Cart.svg";

export const HomeHeader = ({
  setTableView,
  tableView,
  cart,
  products,
  setCurrentPage,
}) => {
  const handleSwitchClick = (val) => {
    setTableView(val);
    localStorage.setItem("view", val);
  };
  const handleCartClick = () => {
    setCurrentPage('cart');
  };
  const handleCompareClick = () => {
    setCurrentPage('compare');

  };

  const totalProductInCart = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.itemAdded,
    0
  );

  const compareCount = products?.filter((pro) => pro.isAddedInCompare)?.length;

  return (
    <div className="switchContainer">
      {compareCount > 1 && (
        <button className="addToCart" onClick={handleCompareClick}>
          Compare
        </button>
      )}

      <div
        className={`${!tableView ? "active" : ""} switch`}
        onClick={() => handleSwitchClick(false)}
      >
        <Grid />
      </div>
      <div
        className={`${tableView ? "active" : ""} switch`}
        onClick={() => handleSwitchClick(true)}
      >
        <Table />
      </div>
      <div className="switch cartContainer" onClick={handleCartClick}>
        <Cart />
        <div className="cartItem">{totalProductInCart}</div>
      </div>
    </div>
  );
};
