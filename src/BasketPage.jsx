import { useEffect, useState } from "react";
import { BasketCard } from "./components/BasketCard";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { TotalOrder } from "./components/TotalOrder";
import "./styles/basket.css";

export const BasketPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orders, setOrders] = useState(
    JSON.parse(sessionStorage.getItem("Order"))
  );

  useEffect(() => {
    setTotalPrice(orders.reduce((acc, el) => acc + el.price, 0));
  }, [orders]);

  useEffect(() => {
    sessionStorage.setItem("Order", JSON.stringify(orders));
  }, [orders]);

  const addDecProduct = ({ target }) => {
    orders.forEach((item) => {
      if (target.name === "minus" && item.id === target.parentElement.id) {
        setTotalPrice(totalPrice - item.price);
      } else {
        setTotalPrice(totalPrice + item.price);
      }
    });
  };

  return (
    <div>
      <NavBar likeCount={2} orderCount={orders.length || 0} />
      <div className="basket-page">
        <h2 className="product-page-title">Корзина</h2>
        <div className="basket-page-orders">
          <div className="basket">
            {orders.map(({ id, img, title, price, addClick, decClick }) => {
              return (
                <BasketCard
                  img={img}
                  title={title}
                  price={price}
                  number={1}
                  key={Math.random()}
                  addClick={addDecProduct}
                  decClick={addDecProduct}
                  id={id}
                />
              );
            })}
          </div>
          <TotalOrder price={totalPrice} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
