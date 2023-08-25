import { NavLink } from "react-router-dom";
import dImage from "../assets/default.png";
import css from "./BucketItem.module.scss";

const BucketItem = ({ item }) => {
  return (
    <li>
      <NavLink
        to={`content/${item.id}`}
        // className={({ isActive }) => (isActive ? "active" : "")}
        className={item.complete ? css.bucket_line : css.bucket}
      >
        <img src={item.img_src || dImage} alt="" width="30px" height="30px" />
        <span>{item.bucket}</span>
      </NavLink>
    </li>
  );
};

export default BucketItem;
