import React from "react";
import ServicePanel from "./ServicePanel";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <ServicePanel title="Web development" />
    </section>
  );
};

export default Services;
