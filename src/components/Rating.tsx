import React from "react";
import cross from "../img/icons/cross-small-svgrepo-com.svg";
import heart from "../img/icons/heart-svgrepo-com.svg";

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return <span className="tooltip">{text}</span>;
};

const Rating = () => {
  return (
    <>
      <section className="rating">
        <div className="rating__tooltip">
          <img className="rating__img" src={cross} alt="cross" />
          <Tooltip text="Don't like" />
        </div>

        <h2 className="rating__title">fluffy</h2>

        <div className="rating__tooltip">
          <img className="footer__img" src={heart} alt="heart" />
          <Tooltip text="Like" />
        </div>
      </section>
    </>
  );
};

export default Rating;
