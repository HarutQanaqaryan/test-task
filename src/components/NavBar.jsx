import { Link } from "react-router-dom";
import "../styles/navbar.css";
import likeIcon from "../assets/likes.svg";
import basketIcon from "../assets/basket.svg";

export const NavBar = ({ likeCount, orderCount }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">QPICK</h1>
      <div className="navbar-icons">
        <Link to="#" className="navbar-icons_likes">
          <img src={likeIcon} alt="Likes" />
          <span className="navbar-icons_likes_count">{likeCount}</span>
        </Link>
        <Link to="/basket" className="navbar-icons_basket">
          <img src={basketIcon} alt="Basket" />
          <span className="navbar-icons_basket_count">{orderCount}</span>
        </Link>
      </div>
    </div>
  );
};
