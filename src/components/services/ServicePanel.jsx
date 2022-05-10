import React from "react";
import { BiCheck } from "react-icons/bi";

const ServicePanel = ({ title }) => {
  return (
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>{title}</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Front-end design and development</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Back-end development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>API integration</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Relational and non relational database development</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Ecommerce Applications</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Custom Web Applications</p>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ServicePanel;
