import { Layout } from "antd";
import { FC, PropsWithChildren } from "react";

import NavMenu from "@/components/NavMenu";
import "./style.less";
import NewArrival from "../NewArrival";

const { Header } = Layout;

const ProductListHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Header className="product-list-header-wrapper">
      <NavMenu />
      <NewArrival />
    </Header>
  );
};

export default ProductListHeader;
