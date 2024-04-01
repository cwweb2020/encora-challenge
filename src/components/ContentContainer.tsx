import { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import Card from "./Card";

const ContentContainer = () => {
  const { content, loading, activeContent } = useContext(ContentContext);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : !!content.length ? (
        <Card contentInfo={activeContent} />
      ) : (
        <div>No Content</div>
      )}
    </>
  );
};

export default ContentContainer;
