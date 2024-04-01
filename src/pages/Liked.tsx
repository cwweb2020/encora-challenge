import { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import { IContent } from "../interfaces/content";
import empty from "../img/icons/empty.png";
import Card from "../components/Card";

const Liked = () => {
  const { liked } = useContext(ContentContext);

  const emptyStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
  };

  return (
    <>
      <article className="liked">
        <h1 className="liked__title">liked</h1>
        <div
          style={liked.length === 0 ? emptyStyles : {}}
          className="liked__wrapper"
        >
          {!!liked.length ? (
            liked.map((like: IContent) => (
              <Card key={like.id} contentInfo={like} />
            ))
          ) : (
            <img className="liked__img" src={empty} alt="No data" />
          )}
        </div>
      </article>
    </>
  );
};

export default Liked;
