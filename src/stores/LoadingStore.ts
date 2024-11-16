import { action, makeObservable, observable } from "mobx";
import RootAPI from "@/api";
import { RootStore } from ".";

export default class LoadingStore {
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

  @observable actionLoading: Record<string, boolean> = {};

  @action.bound
  async setActionLoading(name: string, isLoading: boolean) {
    this.actionLoading[name] = isLoading;
  }
}
