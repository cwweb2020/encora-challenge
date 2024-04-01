import React from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import doggy from "../img/icons/doggy.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

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
            <button onClick={handleMenu}>
              <MdOutlineMenu />
            </button>
          </div>
        </div>
        <div className={`menu ${isOpen ? "active" : ""} `}>
          <Link to={"/liked"} onClick={handleCloseMenu}>
            Liked items
          </Link>
          <Link to={"/"} onClick={handleCloseMenu}>
            All dogs
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
