import { StoreValue } from "antd/es/form/interface";
import { action, observable } from "mobx";
const MAX_STORAGE_SIZE = 200;

export class ApiCacheStorage {
  cachedData = new Map();
  requestIdsByGroups = new Map();

  @action.bound
  find(key: string) {
    return this.cachedData.get(key);
  }

  @action.bound
  set(key: string, value: StoreValue) {
    if (this.cachedData.size >= MAX_STORAGE_SIZE) {
      this.clear();
    }

    this.cachedData.set(key, value);
  }

  @action.bound
  remove(key: string) {
    this.cachedData.delete(key);

    const requestsInGroup = this.requestIdsByGroups.get(key) || [];

    if (requestsInGroup?.length) {
      requestsInGroup.forEach((requestId) => this.cachedData.delete(requestId));
      this.requestIdsByGroups.delete(key);
    }
  }

  @action.bound
  saveRequestId(requestId: string, requestGroups: string[]) {
    requestGroups.forEach((requestGroup) => {
      const existingGroup = this.requestIdsByGroups.get(requestGroup) || [];

      if (!existingGroup.includes(requestId)) {
        this.requestIdsByGroups.set(requestGroup, [
          ...existingGroup,
          requestId,
        ]);
      }
    });
  }

  @action.bound
  clear() {
    this.cachedData.clear();
    this.requestIdsByGroups.clear();
  }
}

class CachedStore {
  apiCacheStorage = new ApiCacheStorage();
  @observable cachedData: Record<string, StoreValue> = {};

  @action.bound
  setCachedData(key: string, data: StoreValue) {
    this.cachedData[key] = data;
  }

  @action.bound
  resetCached = () => {
    this.cachedData = {};
    this.apiCacheStorage.clear();
  };

  @action.bound
  getCachedData(key: string) {
    return this.cachedData[key];
  }
}

export default CachedStore;
