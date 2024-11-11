import { RootStore } from "../stores";
import DataAPI from "./Data";
import Request from "./requests";

export default class RootAPI {
  dataAPI: DataAPI;

  constructor(args: { rootStore: RootStore }) {
    const { rootStore } = args;
    const request = new Request({ rootStore });

    this.dataAPI = new DataAPI({ request });
  }
}
