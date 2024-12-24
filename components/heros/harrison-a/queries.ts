import data from "./data.json";

export type QueryProps = {
  data: {
    id: number
    value: string
    description: string
    icon: string
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;