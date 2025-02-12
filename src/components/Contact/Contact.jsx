import github from "../../assets/icons/GitHub_Logo.png";
import linkedin from "../../assets/icons/LI-Logo.png";
import gmail from "../../assets/icons/Gmail_Logo.svg";

import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-cont">
        <div className="title-cont">
          <h1 className="contact__title">Contact</h1>
        </div>
        <div className="link-cont">
          <a href="https://github.com/benmizel" className="contact__link">
            <img src={github} alt="GitHub" className="contact__image" />
          </a>
          <a
            href="https://www.linkedin.com/in/bmizel/"
            className="contact__link"
          >
            <img src={linkedin} alt="LinkedIn" className="contact__image" />
          </a>
          <a href="mailto:bemizel@gmail.com" className="contact__link">
            <img src={gmail} alt="Email" className="contact__image gmail" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
