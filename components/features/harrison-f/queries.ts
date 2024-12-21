import data from "./data.json";

export type QueryProps = {
  data: {
    id: number
    title: string
    slug: string
    description: string
    image: string
    author: {
      name: string
      createdAt: string
      image: string
    }
  }[],
  relatedData: {
    id: number
    title: string
    slug: string
    description: string
    image: string
    author: {
      name: string
      createdAt: string
      image: string
    }
  }[],
  categories: {
    id: number,
    name: string
    slug: string
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;