import { useLocation } from "react-router-dom";
import { getContentImgPath } from "../helper";
import { IContent } from "../interfaces/content";
// import dog from "../img/dogs/12.jpg";

type Props = {
  contentInfo: IContent;
};

const Card = ({ contentInfo }: Props) => {
  const location = useLocation();
  const dinamycHeight = location.pathname === "/liked" ? "22vh" : "60vh";
  return (
    <article className="card">
      {/* <img className="card__img" src={dog} alt="Dog" /> */}
      <div style={{ height: dinamycHeight }} className="image__container">
        <img
          className="card__img"
          src={getContentImgPath(contentInfo.img)}
          alt="Dog"
        />
      </div>

      <footer className="card__footer">
        <h3 className="card__footer-title">About me</h3>
        <p className="card__footer-description">{contentInfo.description}</p>
      </footer>
    </article>
  );
};

export default Card;
