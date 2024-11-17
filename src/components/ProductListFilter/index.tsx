import { DEFAULT_FILTERS } from "@/constants/general";
import { ProductTheme, ProductTier, SortType } from "@/enums";
import { formatPrice } from "@/helpers";
import { useStores } from "@/hooks";
import type { SearchProductListParam } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Select, Slider, SliderSingleProps } from "antd";
import { FC } from "react";
import "./style.less";

const { useForm, Item } = Form;

const SLIDER_RANGE: [number, number] = [0.01, 200];

const TierOptions = [
  { value: null, label: "All" },
  { value: ProductTier.Basic, label: "Basic" },
  { value: ProductTier.Premium, label: "Premium" },
  { value: ProductTier.Deluxe, label: "Deluxe" },
];

const ThemeOptions = [
  { value: null, label: "All" },
  { value: ProductTheme.Colorful, label: "Colorful" },
  { value: ProductTheme.Halloween, label: "Halloween" },
  { value: ProductTheme.Light, label: "Light" },
  { value: ProductTheme.Dark, label: "Dark" },
];

const TimeOptions = [
  { value: SortType.None, label: "None" },
  { value: SortType.Desc, label: "Lastest" },
  { value: SortType.Asc, label: "Oldest" },
];

const PriceOptions = [
  { value: SortType.None, label: "None" },
  { value: SortType.Asc, label: "Low to high" },
  { value: SortType.Desc, label: "High to low" },
];

const ProductListFilter: FC = () => {
  const [form] = useForm();
  const {
    productStore: { getProductList, setProductFilter },
  } = useStores();

  const marks: SliderSingleProps["marks"] = {
    [SLIDER_RANGE[0]]: formatPrice(SLIDER_RANGE[0]),
    [SLIDER_RANGE[1]]: formatPrice(SLIDER_RANGE[1]),
  };

  const initialValues: SearchProductListParam = {
    q: "",
    price: SLIDER_RANGE,
    tier: null,
    theme: null,
    sortTime: SortType.Desc,
    sortPrice: SortType.None,
  };

  const handleSubmit = async (values: SearchProductListParam) => {
    setProductFilter({ ...DEFAULT_FILTERS, ...values });

    await getProductList();

    const productListEl = document.querySelector(
      ".product-list-container .product-list"
    );

    if (productListEl) {
      productListEl.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleResetFilter = () => {
    form.resetFields();
    setProductFilter(DEFAULT_FILTERS);
    getProductList();
  };

  const handleFormValuesChange = (changedValue: SearchProductListParam) => {
    if (changedValue?.sortPrice) {
      form.setFieldValue("sortTime", SortType.None);
    }

    if (changedValue?.sortTime) {
      form.setFieldValue("sortPrice", SortType.None);
    }
  };

  return (
    <div className="product-list-filter-wrapper">
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={handleSubmit}
        onValuesChange={handleFormValuesChange}
      >
        <div className="filter-inputs">
          <Item name="q">
            <Input
              className="search-input"
              placeholder="Quick Search"
              prefix={<FontAwesomeIcon icon={["fas", "search"]} />}
            />
          </Item>

          <Item name="price" label="PRICE" className="price-filter">
            <Slider
              min={SLIDER_RANGE[0]}
              max={SLIDER_RANGE[1]}
              range
              marks={marks}
              step={0.01}
              tooltip={{
                formatter: (value) => `${value} ETH`,
              }}
            />
          </Item>
          <Item name="tier" label="TIER">
            <Select options={TierOptions} />
          </Item>
          <Item name="theme" label="THEME">
            <Select options={ThemeOptions} />
          </Item>
          <Item name="sortTime" label="TIME">
            <Select options={TimeOptions} />
          </Item>
          <Item name="sortPrice" label="PRICE">
            <Select options={PriceOptions} />
          </Item>
        </div>
        <div className="filter-actions">
          <div className="reset-filter">
            <Button type="text" onClick={handleResetFilter}>
              <FontAwesomeIcon icon={["fas", "xmark-circle"]} />
              Reset filter
            </Button>
          </div>
          <div className="search-button">
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProductListFilter;
