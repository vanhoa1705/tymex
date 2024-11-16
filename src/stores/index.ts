import RootAPI from "../api";
import { makeObservable } from "mobx";
import LoadingStore from "./LoadingStore";
import ProductStore from "./ProductStore";

class RootStore {
  productStore: ProductStore;
  loadingStore: LoadingStore;
  rootAPI: RootAPI;

  constructor() {
    makeObservable(this);

    const rootAPI = new RootAPI({ rootStore: this });
    this.rootAPI = rootAPI;

    this.productStore = new ProductStore({ rootAPI: rootAPI, rootStore: this });
    this.loadingStore = new LoadingStore({ rootAPI: rootAPI, rootStore: this });
  }
}

export { RootStore };

const rootStore = new RootStore();
export default rootStore;
