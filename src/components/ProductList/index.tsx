import { FC } from "react";
import ProductItem from "./components/ProductItem";
import "./style.less";

const ProductList: FC = () => {
  return (
    <div className="product-list-wrapper">
      <ProductItem />
    </div>
  );
};

export default ProductList;
