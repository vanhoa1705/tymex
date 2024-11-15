import { IAuthor } from "@/interfaces";

export const formatPrice = (price: number) => {
  return `${price} ETH`;
};

export const formatName = (author: IAuthor) => {
  return `${author.firstName} ${author.lastName}`;
};
