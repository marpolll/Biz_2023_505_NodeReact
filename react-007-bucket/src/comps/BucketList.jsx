import BucketItem from "./BucketItem";
import css from "./BucketList.module.scss";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const UL = styled.ul`
  & a.active {
    color: blue;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    border: 1px solid #aaa;
  }
`;

const BucketList = () => {
  const { bucketList } = useLoaderData();
  const BucketItemListView = bucketList?.map((item) => {
    return <BucketItem key={item.id} item={item} />;
  });
  return <UL className={css.buck_ul}>{BucketItemListView}</UL>;
};

export default BucketList;
