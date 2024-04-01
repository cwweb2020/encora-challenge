import { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import cross from "../img/icons/cross-small-svgrepo-com.svg";
import heart from "../img/icons/heart-svgrepo-com.svg";

const Tooltip = ({ text }: { text: string }) => {
  return <span className="tooltip">{text}</span>;
};

const Rating = () => {
  const { handleSetContentDisLiked, handleSetContentLiked, activeContent } =
    useContext(ContentContext);
  return (
    <>
      <section className="rating">
        <div className="rating__tooltip">
          <button onClick={handleSetContentDisLiked}>
            <img className="rating__img" src={cross} alt="cross" />
          </button>
          <Tooltip text="Don't like" />
        </div>

        <h2 className="rating__title">{activeContent.name}</h2>

        <div className="rating__tooltip">
          <button onClick={handleSetContentLiked}>
            <img className="footer__img" src={heart} alt="heart" />
          </button>
          <Tooltip text="Like" />
        </div>
      </section>
    </>
  );
};

export default Rating;
