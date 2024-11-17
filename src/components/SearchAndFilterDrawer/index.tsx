import { Drawer } from "antd";
import { FC } from "react";
import ProductListFilter from "../ProductListFilter";
import { useStores } from "@/hooks";
import "./style.less";
import { observer } from "mobx-react";

const SearchAndFilterDrawer: FC = () => {
  const {
    productStore: {
      setIsOpenSearchAndFilterDrawer,
      isOpenSearchAndFilterDrawer,
    },
  } = useStores();

  return (
    <Drawer
      className="search-and-filters-drawer"
      title="Search and filters"
      closable={false}
      onClose={() => setIsOpenSearchAndFilterDrawer(false)}
      open={isOpenSearchAndFilterDrawer}
      width={400}
      placement="left"
    >
      <ProductListFilter />
    </Drawer>
  );
};

export default observer(SearchAndFilterDrawer);
