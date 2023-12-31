import uuid from "react-uuid";

const sampleBucketList = ["개발자되기", "react master", "spring master"];

export const bucketLoader = () => {
  /**
   * bucket 을 key 로 하고 sampleBucketList 를 데이터로 담아서
   * JSON type 데이터 return
   */
  return { bucketList: sampleBucketList };
};

export const bucketAction = () => {
  console.log("action");
  return sampleBucketList.push(uuid());
};
