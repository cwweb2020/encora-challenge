import { IContent } from "../interfaces/content";
import mock from "../lib/data.json";

export const fetchContent = async () => {
  try {
    const data = new Promise<IContent[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(mock);
      }, 2000);
    });
    const response = await data;
    return response;
  } catch (error) {
    throw error;
  }
};
