import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import { FC } from "react";

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

const NavMenu: FC = () => {
  return (
    <div className="nav-menu">
      <Menu className="nav-menu-wrapper" mode="horizontal" items={items} />
      <div className="extra-header">
        <Button type="primary">Connect Wallet</Button>
        <Dropdown menu={{ items: dropdownItems }} placement="bottom">
          <Button className="language-dropdown">
            <FontAwesomeIcon icon={["fas", "globe"]} />
            <FontAwesomeIcon icon={["fas", "chevron-down"]} />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavMenu;
