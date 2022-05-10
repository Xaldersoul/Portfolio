import React from "react";

const PortfolioItem = ({ title, image }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-img">
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a
          href="https://github.com/Xaldersoul/Food-app"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Github
        </a>
        <a
          href="https://github.com/Xaldersoul/Food-app"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
