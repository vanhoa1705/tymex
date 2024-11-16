import { RootStore } from "../stores";
import ProductAPI from "./ProductAPI";
import Request from "./requests";

export default class RootAPI {
  productAPI: ProductAPI;

  constructor(args: { rootStore: RootStore }) {
    const { rootStore } = args;
    const request = new Request({ rootStore });

    this.productAPI = new ProductAPI({ request });
  }
}
