import { SortType } from "@/enums";

export const DEFAULT_PAGE_SIZE = 40;

export const DEFAULT_PAGINATION = {
  _page: 1,
  _limit: DEFAULT_PAGE_SIZE,
};

export const DEFAULT_FILTERS = {
  ...DEFAULT_PAGINATION,
  sortTime: SortType.Desc,
  sortPrice: SortType.None,
};
