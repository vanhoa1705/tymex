import { Layout } from "antd";
import { FC, PropsWithChildren } from "react";

import ProductListHeader from "@/components/ProductListHeader";
import "./style.less";
import classNames from "classnames";

const { Content, Footer } = Layout;

interface IProductListContainerProps extends PropsWithChildren {
  className?: string;
}

const ProductListContainer: FC<IProductListContainerProps> = ({
  children,
  className,
}) => {
  return (
    <Layout className={classNames("product-list-layout", className)}>
      <ProductListHeader />
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default ProductListContainer;
