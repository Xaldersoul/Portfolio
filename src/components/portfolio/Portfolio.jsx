import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/food2.jpg";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioItem
          title="Food proyect"
          image={IMG1}
          github="https://github.com/Xaldersoul/Food-app"
        />
      </div>
    </section>
  );
};

export default Portfolio;
