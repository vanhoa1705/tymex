
export default class ProductAPI {
  request

  constructor(args) {
    this.request = args.request;
  }

  getProductList = (config) =>
    this.request.get("/products", config);
}
