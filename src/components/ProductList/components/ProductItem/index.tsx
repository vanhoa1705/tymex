import { formatName, formatPrice } from "@/helpers";
import { IProduct } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ReactComponent as Verified } from "@/assets/svg/verified.svg";
import "./style.less";

interface IProductItemProps {
  product: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-image">
        <img src={product.author.avatar} alt="product-image" />
        <div className="category">{product.category}</div>
        {product.isFavorite && (
          <div className="favorite">
            <FontAwesomeIcon icon={["fas", "heart"]} />
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-price">{formatPrice(product.price)}</div>
      </div>
      <div className="author">
        <div className="avatar">
          <img src={product.author.avatar} alt="avatar" />
          <div className="verified">
            <Verified />
          </div>
        </div>
        <div className="name">{formatName(product.author)}</div>
      </div>
    </div>
  );
};

export default ProductItem;
