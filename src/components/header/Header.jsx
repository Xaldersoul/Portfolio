import React from "react";
import Cta from "./Cta";
import Isaac from "../../assets/Aisak_transparent.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Benjamin Guerra</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <a
            href="https://www.instagram.com/layadraco/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Isaac} alt="Benjamin Guerra" />
          </a>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
