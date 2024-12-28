import data from "./data.json";

export type QueryProps = {
  types: {
    id: number
    name: string
    slug: string
  }[],
  data: {
    id: number
    type: number
    title: string
    description: string
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;