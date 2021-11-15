import { Author } from "./author";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  feedImage: string;
  author: Author;
  excerpt: string;
  body: string;
};
