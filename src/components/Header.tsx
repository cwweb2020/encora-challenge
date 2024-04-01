import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import doggy from "../img/icons/doggy.png";

const Header: React.FC = () => {
  return (
    <>
      <section className="header">
        <div className="header__wrapper">
          <div className="container__settings">
            <IoMdSettings />
          </div>
          <div className="container__logo">
            <img className="logo__img" src={doggy} alt="" />
            <h2 className="logo__title">doggies</h2>
          </div>
          <div className="container__menu">
            <MdOutlineMenu />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
