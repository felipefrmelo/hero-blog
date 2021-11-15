export type Author = {
  name: string;
  avatar: string;
};

export const createAuthor = (name: string, avatar: string) =>
  Object.freeze({
    name,
    avatar,
  });
