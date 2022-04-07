import { Link } from "react-router-dom";
import "../styles/footer.css";
import globe from "../assets/globe.svg";
import vk from "../assets/VK.svg";
import telegram from "../assets/Telegram.svg";
import whatsapp from "../assets/Whatsapp.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title">QPICK</h2>
      <div className="footer-links">
        <Link to="/" className="footer-links_link">
          Избранное
        </Link>
        <Link to="/" className="footer-links_link">
          Корзина
        </Link>
        <Link to="/" className="footer-links_link">
          Контакты
        </Link>
      </div>
      <div className="footer-second-block">
        <Link to="/" className="footer-links_link">
          Условия сервиса
        </Link>
        <div className="footer-lngs">
          <img src={globe} alt="Globe" />
          <Link to="/" className="footer-lng-rus">
            Рус
          </Link>
          <Link to="/" className="footer-lng-eng">
            Eng
          </Link>
        </div>
      </div>
      <div className="footer-contact">
        <Link to="/" className="footer-contact_icon">
          <img src={vk} alt="VK" />
        </Link>
        <Link to="/" className="footer-contact_icon">
          <img src={telegram} alt="Telegram" />
        </Link>
        <Link to="/" className="footer-contact_icon">
          <img src={whatsapp} alt="WhatsApp" />
        </Link>
      </div>
    </div>
  );
};
