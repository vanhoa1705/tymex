import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, Slider, SliderSingleProps } from "antd";
import "./style.less";

const { useForm, Item } = Form;

const SLIDER_RANGE = [0.01, 200];

const ProductListFilter: FC = () => {
  const [form] = useForm();
  const marks: SliderSingleProps["marks"] = {
    [SLIDER_RANGE[0]]: `${SLIDER_RANGE[0]} ETH`,
    [SLIDER_RANGE[1]]: `${SLIDER_RANGE[1]} ETH`,
  };

  return (
    <div className="product-list-filter-wrapper">
      <Form form={form} layout="vertical">
        <Item name="searchInput">
          <Input
            className="search-input"
            placeholder="Quick Search"
            prefix={<FontAwesomeIcon icon={["fas", "search"]} />}
          />
        </Item>

        <Item name="price" label="PRICE">
          <Slider
            className="price-filter"
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
      </Form>
    </div>
  );
};

export default ProductListFilter;
