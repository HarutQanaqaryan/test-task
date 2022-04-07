import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ProductCard } from "./components/ProductCard";
import { headphones } from "./helpers/productData";
import { wirelessHeadphones } from "./helpers/productData";
import "./styles/product-page.css";

export const ProductsPage = () => {
  const [orderNumber, setOrderNumber] = useState(0);
  const [order, setOrder] = useState([]);

  const addBasket = ({
    target: {
      parentElement: { id },
    },
  }) => {
    headphones.forEach((item) => {
      if (item.id === id) {
        setOrder([...order, item]);
      }
    });
    wirelessHeadphones.forEach((item) => {
      if (item.id === id) {
        setOrder([...order, item]);
      }
    });
  };

  useEffect(() => {
    sessionStorage.setItem("Order", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    setOrderNumber(order.length);
  }, [order]);
  
  return (
    <div className="product-page">
      <NavBar likeCount="1" orderCount={orderNumber} />
      <div>
        <h2 className="product-page-title">Наушники</h2>
        <div className="product-page-products">
          {headphones.map(
            ({
              id,
              img,
              title,
              price,
              rate,
              formerPrice,
              percentDicount,
              onClick,
            }) => {
              return (
                <ProductCard
                  img={img}
                  title={title}
                  price={price}
                  formerPrice={formerPrice}
                  rate={rate}
                  key={id}
                  percentDicount={percentDicount}
                  onClick={addBasket}
                  id={id}
                />
              );
            }
          )}
        </div>
      </div>
      <div>
        <h2 className="product-page-title">Беспроводные Наушники</h2>
        <div className="product-page-products">
          {wirelessHeadphones.map(
            ({
              id,
              img,
              title,
              price,
              rate,
              formerPrice,
              percentDicount,
              onClick,
            }) => {
              return (
                <ProductCard
                  img={img}
                  title={title}
                  price={price}
                  formerPrice={formerPrice}
                  rate={rate}
                  key={id}
                  percentDicount={percentDicount}
                  onClick={addBasket}
                  id={id}
                />
              );
            }
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
