import data from "./data.json";

export type QueryProps = {
  data: {
    id: number
    title: string
    description: string
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;