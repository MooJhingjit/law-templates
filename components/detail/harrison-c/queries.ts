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
  }[]
}

const main = async (): Promise<QueryProps> => {
  return Promise.resolve(data);
};

export default main;