import data from "./data.json";

export type QueryProps = {
  tags: {
    id: number
    name: string
    slug: string
  }[],
  tag: {
    id: number
    name: string
    slug: string
  },
  data: {
    title: string
    slug: string
    content: string
  }
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;