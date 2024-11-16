import RootAPI from "@/api";
import { DEFAULT_PAGINATION } from "@/constants/general";
import { SortType } from "@/enums";
import { IProduct } from "@/interfaces";
import type { GetProductListType, SearchProductListParam } from "@/types";
import { action, makeObservable, observable } from "mobx";
import { RootStore } from ".";

export default class ProductStore {
  rootAPI: RootAPI;
  rootStore: RootStore;

  constructor({
    rootStore,
    rootAPI,
  }: {
    rootStore: RootStore;
    rootAPI: RootAPI;
  }) {
    makeObservable(this);
    this.rootStore = rootStore;
    this.rootAPI = rootAPI;
  }

  @observable productList: IProduct[] = [];
  @observable productFilters: SearchProductListParam = {
    ...DEFAULT_PAGINATION,
    sortTime: SortType.Desc,
  };

  @action.bound
  async getProductList(data?: GetProductListType) {
    const { params = this.productFilters, isGetMoreProducts = false } =
      data || {};

    const {
      loadingStore: { setActionLoading },
    } = this.rootStore;
    try {
      setActionLoading("getProductList", true);

      const formattedParams = {
        ...params,
        price_gte: params?.price?.[0],
        price_lte: params?.price?.[1],
        _sort: params?.sortPrice ? "price" : "createdAt",
        _order: params?.sortPrice || params?.sortTime,
      };

      delete formattedParams?.price;

      const { data } = await this.rootAPI.productAPI.getProductList({
        params: formattedParams,
      });

      if (isGetMoreProducts) {
        this.productList.push(...data);
      } else {
        this.productList = data;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading("getProductList", false);
    }
  }

  @action.bound
  setProductFilter(productFilers: SearchProductListParam) {
    this.productFilters = productFilers;
  }
}
