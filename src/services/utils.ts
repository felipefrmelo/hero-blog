import { FeedImage } from "../models";



export const createFeedImage = (json: any): FeedImage | undefined => {
  return (
    json?.feed_image && {
      url: json.feed_image.url,
      alt: json.feed_image.alt,
    }
  );
};
