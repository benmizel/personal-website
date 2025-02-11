import profile from "../../assets/picture/profile-pic.jpg";

import "./Hero.scss";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-cont">
        <div className="image-cont">
          <img src={profile} alt="Profile Pic" className="hero__image" />
        </div>
        <div className="intro-cont">
          <h1 className="hero__intro">
            Software Developer
            <br />
            Data Enthusiast
            <br />
            Business Professional
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Hero;
