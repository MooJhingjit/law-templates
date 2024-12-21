import data from "./data.json";

export type QueryProps = {
  data: {
    id: number
    name: string
    position: string
    image: string
    bio: string
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;