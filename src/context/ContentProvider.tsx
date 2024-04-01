import { createContext, useEffect, useState } from "react";
import { IContent } from "../interfaces/content";
import { fetchContent } from "../services/content.service";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const ContentContext = createContext<any>(null);

const ContentProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<IContent[] | []>([]);
  const [activeContent, setActiveContent] = useState<IContent | {}>({});
  const [liked, setLiked] = useState<IContent[]>([]);

  const getAsyncContnet = async () => {
    setLoading(true);
    try {
      const data = await fetchContent();
      setContent(data);
      setLoading(false);
      setActiveContent(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetContentLiked = () => {
    const active = activeContent as IContent;
    setLiked([...liked, activeContent as IContent]);
    const filtered = content?.filter((item) => item.id !== active.id);
    setContent(filtered || []);
    setActiveContent(filtered?.[0] || {});
  };

  const handleSetContentDisLiked = () => {
    const active = activeContent as IContent;
    const filtered = content?.filter((item) => item.id !== active.id);
    setContent(filtered || []);
    setActiveContent(filtered?.[0] || {});
  };

  useEffect(() => {
    getAsyncContnet();
  }, []);

  return (
    <ContentContext.Provider
      value={{
        loading,
        content,
        activeContent,
        liked,
        handleSetContentLiked,
        handleSetContentDisLiked,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
