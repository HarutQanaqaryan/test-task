import remove from "../assets/remove.svg";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

export const BasketCard = ({
  img,
  title,
  price,
  number,
  id,
  addClick,
  decClick,
}) => {
  return (
    <div className="basket-card">
      <div className="basket-card-fist-block">
        <div className="basket-card-item">
          <div className="basket-card-product-img-block">
            <img src={img} alt="Product" className="basket-card-product-img" />
          </div>
          <div className="basket-card-price_title">
            <span className="basket-card-title">{title}</span>
            <span className="basket-card-price">{price} ₽</span>
          </div>
        </div>
        <img src={remove} alt="Remove" className="basket-card-remove" />
      </div>
      <div className="basket-card-add">
        <div className="basket-card-add-product" id={id}>
          <button alt="Minus" className="basket-card-minus" onClick={decClick} name="minus">
            <img src={minus} alt="Minus" />
          </button>
          <span className="basket-card-product-count">{number}</span>
          <button
            alt="Plus"
            className="basket-card-plus"
            onClick={addClick}
            id={id}
            name="plus"
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>
        <span className="basket-card-all-price">{price} ₽</span>
      </div>
    </div>
  );
};
