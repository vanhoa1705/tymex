import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Select, Slider, SliderSingleProps } from "antd";
import "./style.less";
import { DefaultOptionType } from "antd/es/select";

const { useForm, Item } = Form;

const SLIDER_RANGE = [0.01, 200];

const TierOptions: DefaultOptionType[] = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled" },
];

const ThemeOptions: DefaultOptionType[] = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled" },
];

const TimeOptions: DefaultOptionType[] = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled" },
];

const PriceOptions: DefaultOptionType[] = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled" },
];

const ProductListFilter: FC = () => {
  const [form] = useForm();
  const marks: SliderSingleProps["marks"] = {
    [SLIDER_RANGE[0]]: `${SLIDER_RANGE[0]} ETH`,
    [SLIDER_RANGE[1]]: `${SLIDER_RANGE[1]} ETH`,
  };

  return (
    <div className="product-list-filter-wrapper">
      <Form form={form} layout="vertical">
        <div className="filter-inputs">
          <Item name="searchInput">
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
              defaultValue={SLIDER_RANGE}
              marks={marks}
              step={0.01}
              tooltip={{
                formatter: (value) => `${value} ETH`,
              }}
            />
          </Item>
          <Item label="TIER">
            <Select options={TierOptions} />
          </Item>
          <Item label="THEME">
            <Select options={ThemeOptions} />
          </Item>
          <Item label="TIME">
            <Select options={TimeOptions} />
          </Item>
          <Item label="PRICE">
            <Select options={PriceOptions} />
          </Item>
        </div>
        <div className="filter-actions">
          <div className="reset-filter">
            <Button type="text">
              <FontAwesomeIcon icon={["fas", "xmark-circle"]} />
              Reset filter
            </Button>
          </div>
          <div className="search-button">
            <Button type="primary">Search</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProductListFilter;
