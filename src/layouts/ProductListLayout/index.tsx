import { Button, Dropdown, Layout, Menu, MenuProps } from "antd";
import { FC, PropsWithChildren } from "react";

import "./style.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Header, Content, Footer } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const dropdownItems: MenuProps["items"] = [
  {
    key: "1",
    label: "1st menu item",
  },
  {
    key: "2",
    label: "2nd menu item",
  },
  {
    key: "3",
    label: "3rd menu item",
  },
];

const ProductListContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="product-list-layout">
      <Header>
        <Menu mode="horizontal" items={items} />
        <div className="extra-header">
          <Button type="primary">Connect Wallet</Button>
          <Dropdown menu={{ items: dropdownItems }} placement="bottom">
            <Button className="language-dropdown">
              <FontAwesomeIcon icon={["fas", "globe"]} />
              <FontAwesomeIcon icon={["fas", "chevron-down"]} />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default ProductListContainer;
