import "../styles/total-orders.css";

export const TotalOrder = ({ price }) => {
  return (
    <div className="total-orders">
      <div className="total-order">
        <h4 className="total-order-title">Итого</h4>
        <span className="total-order-price">₽ {price}</span>
      </div>
      <button className="total-order-go-to-checkout">
        Перейти к оформлению
      </button>
    </div>
  );
};
