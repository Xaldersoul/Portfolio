import React from "react";

const ExperienceTech = ({ icon, tech, level }) => {
  return (
    <article className="experience__detail">
      {icon}
      <div>
        <h5>{tech}</h5>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};

export default ExperienceTech;
