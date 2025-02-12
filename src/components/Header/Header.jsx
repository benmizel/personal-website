import { Link } from "react-router-dom";
import signature from "../../assets/logo/signature.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="header__logo-link">
        <img
          className="header__logo"
          src={signature}
          alt="Ben Mizel Signature"
        />
      </Link>
      <ul className="header__nav">
        <li className="header__item">
          <a href="#about" className="header__item-link">
            About
          </a>
        </li>

        <li className="header__item">
          <a href="#projects" className="header__item-link">
            Projects
          </a>
        </li>
        <li className="header__item">
          <a href="#contact" className="header__item-link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
