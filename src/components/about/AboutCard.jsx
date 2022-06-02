import React from "react";

const AboutCard = ({ icon, title, text, link }) => {
  return (
    <a href={"#" + link} className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{text}</small>
    </a>
  );
};

export default AboutCard;
