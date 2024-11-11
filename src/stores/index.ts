import { observable } from "mobx";
import RootAPI from "../api";
import DataStore from "./DataStore";
import CachedStore from "./CachedStore";

class RootStore {
  @observable cachedStore: CachedStore;
  dataStore: DataStore;

  constructor() {
    const rootAPI = new RootAPI({ rootStore: this });

    this.dataStore = new DataStore({ rootAPI: rootAPI, rootStore: this });
    this.cachedStore = new CachedStore();
  }
}

export { RootStore };

const rootStore = new RootStore();
export default rootStore;
