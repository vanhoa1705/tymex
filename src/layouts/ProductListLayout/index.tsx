import { Layout } from "antd";
import { FC, PropsWithChildren } from "react";

import ProductListHeader from "@/components/ProductListHeader";
import "./style.less";
import classNames from "classnames";
import ProductListFilter from "@/components/ProductListFilter";

const { Content, Footer, Sider } = Layout;

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
      <Content className="product-list-content">
        <Layout className="main-layout">
          <Sider width={350}>
            <ProductListFilter />
          </Sider>
          <Content>{children}</Content>
        </Layout>
        <div className="footer-product-list" />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default ProductListContainer;
