import React from "react";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { Header } from "../Header/Header";
import { Product } from "./Product/Product";
import { crestProductInventory } from "../../Data/inventory";
import { crestProduct } from "../../Data/product";
import { Cart } from "../Cart/Cart";
import { Compare } from "../Compare/Compare";

export const Home = () => {
  const [tableView, setTableView] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [inventory, setInventory] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState("home");

  React.useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    let storedInventory = JSON.parse(
      localStorage.getItem("inventory") || JSON.stringify(crestProductInventory)
    );
    setInventory(storedInventory);
    let view = JSON.parse(localStorage.getItem("view"));
    setTableView(view);
    setProducts(crestProduct);
  }, []);

  React.useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  React.useEffect(() => {
    if (inventory.length) {
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  }, [inventory]);

  return (
    <div>
      <Header
        title={
          currentPage === "cart"
            ? "Cart"
            : currentPage === "compare"
            ? "Compare"
            : "Crest Data System"
        }
      >
        {currentPage === "home" ? (
          <HomeHeader
            tableView={tableView}
            setTableView={setTableView}
            cart={cart}
            products={products}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <div
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </div>
        )}
      </Header>
      {currentPage === "cart" ? (
        <Cart
          setCart={setCart}
          cart={cart}
          inventory={inventory}
          setInventory={setInventory}
          products={products}
          setProducts={setProducts}
        />
      ) : currentPage === "compare" ? (
        <Compare products={products} isItCompare={true}/>
      ) : (
        <Product
          tableView={tableView}
          setCart={setCart}
          cart={cart}
          inventory={inventory}
          setInventory={setInventory}
          products={products}
          setProducts={setProducts}
        />
      )}
    </div>
  );
};
