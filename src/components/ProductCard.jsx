import "../styles/product-card.css";
import star from "../assets/star.svg";

export const ProductCard = ({
  img,
  title,
  price,
  formerPrice,
  rate,
  percentDicount,
  onClick,
  id,
}) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={img} alt="Product" />
      </div>
      <div className="product-card-title-price">
        <span className="product-card-title">{title}</span>
        <div className="product-card-prices">
          <span
            className={
              !percentDicount
                ? "product-card-price"
                : "product-card-price-discount"
            }
          >
            {price} ₽
            {percentDicount && (
              <span className="product-card-price-percent">
                {percentDicount}%
              </span>
            )}
          </span>
          {formerPrice && (
            <span className="product-card-formerprice">{formerPrice}</span>
          )}
        </div>
      </div>
      <div className="product-card-rate-buy" id={id}>
        <span className="product-card-rate">
          <img src={star} alt="Star" className="product-card-star" />
          <span className="product-card-rate-number">{rate}</span>
        </span>
        <button className="product-card-buy" onClick={onClick}>
          Купить
        </button>
      </div>
    </div>
  );
};
