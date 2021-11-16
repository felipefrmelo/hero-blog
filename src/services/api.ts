import { PostDetail, PostPreview } from "../models";
import { baseUrl, createFeedImage } from "./utils";

const postPreviewFromJson = (json: any): PostPreview => {
  return {
    id: json.id,
    title: json.title,
    intro: json.intro,
    date: json.date,
    feedImage: createFeedImage(json),
    tags: json.tags,
    author: json.author,
  };
};

export const getPosts = async (): Promise<PostPreview[]> => {
  const data = await fetch(`${baseUrl}/api/v2/blog`).then((res) => res.json());
  return data.items.map(postPreviewFromJson);
};

const postDetailFromJson = (json: any): PostDetail => {
  return {
    id: json.id,
    title: json.title,
    intro: json.intro,
    body: json.body,
    date: json.date,
    feedImage: createFeedImage(json),
    tags: json.tags,
    author: json.author,
  };
};

export const getPostById = async (
  id: number
): Promise<PostDetail | undefined> => {
  const data = await fetch(`${baseUrl}/api/v2/blog/${id}/`).then((res) =>
    res.json()
  );
  return postDetailFromJson(data);
};
