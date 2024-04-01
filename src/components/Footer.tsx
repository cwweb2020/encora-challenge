import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import fire from "../img/icons/footer-icons/fire.png";
import comment from "../img/icons/footer-icons/comment.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <img className="footer__img-fire" src={fire} alt="fire-icon" />
          <img className="footer__img-globe" src={comment} alt="speak-icon" />
          <IoPersonSharp />
        </div>
      </footer>
    </>
  );
};

export default Footer;
