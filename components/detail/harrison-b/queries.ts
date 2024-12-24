import data from "./data.json";

export type QueryProps = {
  data: {
    title: string
    slug: string
    content: string
    author: {
      name: string
      image: string
      createdAt: string
    }
  }
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;