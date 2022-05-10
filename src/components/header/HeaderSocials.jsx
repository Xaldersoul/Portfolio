import React from "react";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/benjamin-guerra-dev/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Xaldersoul" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://discord.com/users/Xalder#6861"
        target="_blank"
        rel="noreferrer"
      >
        <BsDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
