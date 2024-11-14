import { Layout } from "antd";
import { FC, PropsWithChildren } from "react";

import ProductListHeader from "@/components/ProductListHeader";
import "./style.less";

const { Content, Footer } = Layout;

const ProductListContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="product-list-layout">
      <ProductListHeader />
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default ProductListContainer;
