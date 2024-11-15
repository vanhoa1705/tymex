import ProductList from "@/components/ProductList";
import { FC } from "react";
import "./style.less";

const Home: FC = () => {
  return (
    <div className="product-list-wrapper">
      <div className="categories">categories</div>
      <div className="product-list">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
