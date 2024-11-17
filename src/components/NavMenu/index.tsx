import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu } from "antd";
import { FC } from "react";
import "./style.less";

const items = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "aboutUs",
    label: "About Us",
  },
  {
    key: "ourTeam",
    label: "Our Team",
  },
  {
    key: "marketplace",
    label: "Marketplace",
  },
  {
    key: "roadmap",
    label: "Roadmap",
  },
  {
    key: "whitepaper",
    label: "Whitepaper",
  },
];

const NavMenu: FC = () => {
  return (
    <div className="nav-menu-wrapper">
      <Menu
        className="nav-menu"
        mode="horizontal"
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        activeKey="marketplace"
        theme="dark"
      />
      <div className="extra-header">
        <Button type="primary">Connect Wallet</Button>
        <Button className="language-dropdown">
          <FontAwesomeIcon icon={["fas", "globe"]} />
          <FontAwesomeIcon icon={["fas", "chevron-down"]} />
        </Button>
      </div>
    </div>
  );
};

export default NavMenu;
