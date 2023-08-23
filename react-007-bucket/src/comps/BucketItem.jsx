import { NavLink } from "react-router-dom";
import dImage from "../assets/default.png";
import css from "./BucketItem.module.scss";

const BucketItem = ({ item }) => {
  return (
    <li>
      <NavLink
        to={`content/${item.id}`}
        className={item.complete ? css.bucket_line : css.bucket}
      >
        <img src={item.img_src || dImage} alt="" width="30px" height="30px" />
        {item.bucket}
      </NavLink>
    </li>
  );
};

export default BucketItem;
