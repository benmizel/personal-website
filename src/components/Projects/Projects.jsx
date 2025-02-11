import mrlogo from "../../assets/logo/mrtodo_logo.png";

import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-cont">
        <div className="title-cont">
          <h1 className="projects__title">Projects</h1>
        </div>
        <div className="articles-cont">
          <article className="projects__art">
            <img
              src={mrlogo}
              alt="Mr. To do Logo"
              className="projects__image"
            />
            <p className="projects__desc">
              Mr. To Do is a personal task manager app aimed at helping
              individuals prioritize and keep track of their own to-do list.
            </p>
          </article>
          <article className="projects__art">
            <h2 className="projects__more">More Projects Coming Soon!</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
