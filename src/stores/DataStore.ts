import { action, observable } from "mobx";
import RootAPI from "@/api";
import { RootStore } from ".";

export default class DataStore {
  rootAPI: RootAPI;
  rootStore: RootStore;

  constructor({
    rootStore,
    rootAPI,
  }: {
    rootStore: RootStore;
    rootAPI: RootAPI;
  }) {
    this.rootStore = rootStore;
    this.rootAPI = rootAPI;
  }

  @observable productList: string[] = [];

  @action.bound
  async getProductList() {
    try {
      const { payload } = await this.rootAPI.dataAPI.getProductList("test");
      this.productList = payload;
    } catch (err) {
      console.log(err);
    }
  }
}
