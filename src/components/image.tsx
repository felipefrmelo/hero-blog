import { ImageProps } from "next/image";
import { default as NextImage } from "next/image";
import { baseUrl } from "../services/api";

export const Image = ({ src, alt, ...props }: ImageProps) => {
  console.log(`${baseUrl}${src}`);
  return <NextImage src={`${process.env.BASE_URL}${src}`} alt={alt} {...props} />;
};
