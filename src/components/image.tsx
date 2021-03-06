import { ImageProps } from "next/image";
import { default as NextImage } from "next/image";
import { baseUrl } from "../services/api";

export const Image = ({ src, alt, ...props }: ImageProps) => {
  
  return <NextImage src={`${baseUrl}${src}`} alt={alt} {...props} />;
};
