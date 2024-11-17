import { Layout } from "antd";
import { FC, PropsWithChildren } from "react";

import ProductListHeader from "@/components/ProductListHeader";
import "./style.less";
import classNames from "classnames";
import ProductListFilter from "@/components/ProductListFilter";
import FooterPage from "@/components/FooterPage";

const { Content, Sider } = Layout;

interface IProductListLayoutProps extends PropsWithChildren {
  className?: string;
}

const ProductListLayout: FC<IProductListLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <Layout className={classNames("product-list-layout", className)}>
      <ProductListHeader />
      <Content className="product-list-content">
        <Layout className="main-layout">
          <Sider width={350} className="product-filters-sider">
            <ProductListFilter />
          </Sider>
          <Content>{children}</Content>
        </Layout>
        <div className="footer-product-list" />
      </Content>
      <FooterPage />
    </Layout>
  );
};

export default ProductListLayout;
