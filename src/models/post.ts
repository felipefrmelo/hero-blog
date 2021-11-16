import { FeedImage } from ".";

export interface PostPreview {
  id: number;
  title: string;
  feedImage?: FeedImage;
  author: string;
  intro: string;
  date: string;
  tags?: string[];
}

export interface PostDetail extends PostPreview {
  body: string;
}
