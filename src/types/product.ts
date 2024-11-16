import { ProductTheme, ProductTier, SortType } from "@/enums";

export type SearchProductListParam = {
  q?: string;
  _limit?: number;
  _page?: number;
  price?: [number, number];
  tier?: ProductTier;
  theme?: ProductTheme;
  sortTime?: SortType;
  sortPrice?: SortType;
};

export type PaginationType = {
  _page: number;
  _limit: number;
};

export type GetProductListType = {
  params?: SearchProductListParam;
  isGetMoreProducts?: boolean;
};
