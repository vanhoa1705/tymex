import { FC } from "react";
import ProductListFilter from "@/components/ProductListFilter";
import "./style.less";

const Home: FC = () => {
  return (
    <div className="product-list-wrapper">
      <div className="filter-products">
        <ProductListFilter />
      </div>
      <div className="product-list">
        <div className="categories">categories</div>
        <div className="categories">Product list</div>
      </div>
    </div>
  );
};

export default Home;
