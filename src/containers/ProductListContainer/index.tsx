import ProductList from "@/components/ProductList";
import SearchAndFilterDrawer from "@/components/SearchAndFilterDrawer";
import { DEFAULT_PAGINATION } from "@/constants/general";
import { ProductCategory } from "@/enums";
import { useStores } from "@/hooks";
import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react";
import { FC } from "react";
import "./style.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductListContainer: FC = () => {
  const {
    productStore: {
      productFilters,
      setProductFilter,
      getProductList,
      setIsOpenSearchAndFilterDrawer,
    },
  } = useStores();

  const onClickCategory = (category: ProductCategory) => {
    setProductFilter({
      ...productFilters,
      ...DEFAULT_PAGINATION,
      category: category,
    });

    getProductList();
  };

  return (
    <div className="product-list-container">
      <div className="categories">
        <div className="filter-button">
          <Button
            type="primary"
            onClick={() => setIsOpenSearchAndFilterDrawer(true)}
          >
            <FontAwesomeIcon icon={["fas", "filter"]} />
          </Button>
        </div>

        <Button
          className={classNames("category", {
            isActive: productFilters?.category === null,
          })}
          onClick={() => onClickCategory(null)}
        >
          All
        </Button>
        {Object.values(ProductCategory).map((category) => (
          <Button
            className={classNames("category", {
              isActive: productFilters?.category === category,
            })}
            key={category}
            onClick={() => onClickCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="product-list">
        <ProductList />
        <SearchAndFilterDrawer />
      </div>
    </div>
  );
};

export default observer(ProductListContainer);
