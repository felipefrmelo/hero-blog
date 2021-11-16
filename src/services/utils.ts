import { FeedImage } from "../models";

export const baseUrl = "http://127.0.0.1:8000";

export const createFeedImage = (json: any): FeedImage | undefined => {
  return (
    json?.feed_image && {
      url: json.feed_image.url,
      alt: json.feed_image.alt,
    }
  );
};
