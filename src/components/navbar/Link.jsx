/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";

const Link = ({ link, icon, isActive, onClickNav }) => {
  return (
    <a
      href={link}
      className={isActive === link ? "active" : ""}
      onClick={() => onClickNav(link)}
    >
      {icon}
    </a>
  );
};

export default Link;
