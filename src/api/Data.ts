import Request from "./requests";

export default class DataAPI {
  request: Request;

  constructor(args: { request: Request }) {
    this.request = args.request;
  }

  getProductList = (data: string) => ({ payload: [data] });
}
