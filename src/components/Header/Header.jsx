import { Link, NavLink } from "react-router-dom";
import signature from "../../assets/logo/signature.svg";
import "./Header.scss";

const Header = () => {
  const checkActive = (match, location) => {
    // Get the hash from the URL and compare it to the link's target hash
    return location.hash === match.url;
  };

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
          <NavLink
            to="#about"
            className="header__item-link"
          >
            About
          </NavLink>
        </li>

        <li className="header__item">
          <NavLink
            to="#projects"
            className="header__item-link"
          >
            Projects
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="#contact"
            className="header__item-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
