import gmail from "../../assets/icons/Gmail_Logo.svg";
import github from "../../assets/icons/github-mark-white.svg";
import linkedin from "../../assets/icons/In-White-26.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cont">
        <div className="copy-cont">
          <p className="footer__copy">© 2025 Ben Mizel</p>
        </div>
        <div className="footer-contact-cont">
          <p className="footer__contact">Contact:</p>
          <div className="footer-logo-cont">
            <a href="https://github.com/benmizel" className="footer__link">
              <img src={github} alt="GitHub" className="footer__image" />
            </a>
            <a
              href="https://www.linkedin.com/in/bmizel/"
              className="footer__link"
            >
              <img src={linkedin} alt="LinkedIn" className="footer__image" />
            </a>
            <a href="mailto:bemizel@gmail.com" className="footer__link">
              <img src={gmail} alt="Email" className="footer__image gmail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
