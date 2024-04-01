import React from "react";
import dog from "../img/dogs/12.jpg";

const Card: React.FC = () => {
  return (
    <>
      <article className="card">
        <div className="image__container">
          <img className="card__img" src={dog} alt="Dog" />
        </div>

        <footer className="card__footer">
          <h3 className="card__footer-title">About me</h3>
          <p className="card__footer-description">
            I love playing fetch in the park.
          </p>
        </footer>
      </article>
    </>
  );
};

export default Card;
