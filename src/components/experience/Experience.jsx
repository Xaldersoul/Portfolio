import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ExperienceTech from "./ExperienceTech";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="HTML"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="CSS"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="SASS"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Tailwind CSS"
              level="Basic"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Styled Components"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Boostrap"
              level="Basic"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="React"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="React router"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Redux"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="JavaScript"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="TypeScript"
              level="Basic"
            />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Express"
              level="Experienced"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="PostgreSQL"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Node"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="MongoDB"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Mongooose"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Firebase"
              level="Intermediate"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="PHP"
              level="Basic"
            />
            <ExperienceTech
              icon={<BsPatchCheckFill className="experience__detail-icon" />}
              tech="Laravel"
              level="Basic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
