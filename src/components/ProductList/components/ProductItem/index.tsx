import { formatName, formatPrice } from "@/helpers";
import { IProduct } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ReactComponent as Verified } from "@/assets/svg/verified.svg";
import "./style.less";

const product: IProduct = {
  id: 1,
  title: "Metal Gear Girl",
  category: "Mythic",
  price: 30.09,
  isFavorite: true,
  createdAt: 1624533946000,
  theme: "Halloween",
  tier: "Premium",
  imageId: 8,
  author: {
    firstName: "Dewie",
    lastName: "Labeuil",
    email: "dlabeuilv@nba.com",
    gender: "Male",
    avatar: "https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1",
    onlineStatus: "idle",
  },
};

interface IProductItemProps {
  item?: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ item = product }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-image">
        <img src={item.author.avatar} alt="product-image" />
        <div className="category">{item.category}</div>
        {item.isFavorite && (
          <div className="favorite">
            <FontAwesomeIcon icon={["fas", "heart"]} />
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-name">{item.title}</div>
        <div className="product-price">{formatPrice(item.price)}</div>
      </div>
      <div className="author">
        <div className="avatar">
          <img src={item.author.avatar} alt="avatar" />
          <div className="verified">
            <Verified />
          </div>
        </div>
        <div className="name">{formatName(item.author)}</div>
      </div>
    </div>
  );
};

export default ProductItem;
