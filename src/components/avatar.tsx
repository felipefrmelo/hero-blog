import { Author } from "../models";
import Image from "next/image";

interface AvatarProps {
  author: Author;
}

export const Avatar = ({ author }: AvatarProps) => {
  return (
    <div>
      <Image src={author.avatar} alt={author.name} width={100} height={100} />
      <p>{author.name}</p>
    </div>
  );
};
