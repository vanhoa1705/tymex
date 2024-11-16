import { Skeleton } from "antd";
import { FC } from "react";
import "./style.less";

const ProductLoadingItem: FC = () => {
  return (
    <div className="product-loading-item">
      <Skeleton.Image active className="image" />
      <Skeleton active title={false} paragraph={{ rows: 2 }} />
    </div>
  );
};

export default ProductLoadingItem;
