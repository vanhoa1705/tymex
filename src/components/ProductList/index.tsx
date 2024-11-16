import { useActionLoading, useStores } from "@/hooks";
import { Button } from "antd";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import ProductItem from "./components/ProductItem";
import ProductLoadingItem from "./components/ProductLoadingItem";
import "./style.less";

const ProductList: FC = () => {
  const {
    productStore: {
      getProductList,
      productList,
      setProductFilter,
      productFilters,
    },
  } = useStores();

  const isLoading = useActionLoading("getProductList");

  const skeletonArray = Array.from({ length: 8 }, (_, i) => i);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const onClickViewMore = () => {
    setProductFilter({ ...productFilters, _page: productFilters._page + 1 });

    getProductList({ isGetMoreProducts: true });
  };

  return (
    <div className="product-list-wrapper">
      {productList?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
      {isLoading ? (
        skeletonArray.map((item) => <ProductLoadingItem key={item} />)
      ) : (
        <div className="view-more-button">
          <Button type="primary" onClick={onClickViewMore}>
            View more
          </Button>
        </div>
      )}
    </div>
  );
};

export default observer(ProductList);
