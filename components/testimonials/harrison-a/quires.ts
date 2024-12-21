import data from "./data.json";

export type QueryProps = {
  data: {
    id: number
    content: string
    author: {
      name: string
      location: string
    }
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;