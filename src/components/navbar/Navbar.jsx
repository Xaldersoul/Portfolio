/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessage } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import Link from "./Link";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState("#");

  const onClickNav = (e) => {
    setIsActive(e);
  };

  return (
    <nav>
      <Link
        link="#"
        icon={<AiOutlineHome />}
        isActive={isActive}
        onClickNav={onClickNav}
      />
      <Link
        link="#about"
        icon={<AiOutlineUser />}
        isActive={isActive}
        onClickNav={onClickNav}
      />
      <Link
        link="#experience"
        icon={<BiBook />}
        isActive={isActive}
        onClickNav={onClickNav}
      />
      <Link
        link="#services"
        icon={<RiServiceLine />}
        isActive={isActive}
        onClickNav={onClickNav}
      />
      <Link
        link="#contact"
        icon={<BiMessage />}
        isActive={isActive}
        onClickNav={onClickNav}
      />
    </nav>
  );
};

export default Navbar;
