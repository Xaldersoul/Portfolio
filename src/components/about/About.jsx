import React from "react";
import ME from "../../assets/my_photo.jpg";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import "./about.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Benjamin Guerra" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              icon={<FaAward className="about__icon" />}
              title="Experience"
              text="1+ Year"
            />
            <AboutCard
              icon={<SiJavascript className="about__icon" />}
              title="Technologies"
              text="knowledge in 10+ technologies"
            />
            <AboutCard
              icon={<FaFolderOpen className="about__icon" />}
              title="Proyects"
              text="10+ Proyects"
            />
          </div>
          <p>
            Hello! My name is Benjamin Guerra and I am a full stack web
            developer, as well as a game developer. <br />
            <br /> I have always been passionate about the world of code and
            programming, born from a passion and one of my greatest hobbies,
            which are video games: How they were made, how they were programmed,
            among other things, later web design was added. <br />
            <br /> Now talking a little about what I know how to do, my strength
            is full stack development and these are some of the technologies
            that I use:{" "}
            <strong>
              JavaScript, React, Redux, Express, PostgreSQL, Typescript, Git,
              HTML, CSS, Node.js, MongoDB, Firebase.
            </strong>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
