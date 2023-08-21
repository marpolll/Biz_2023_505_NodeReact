import { useParams } from "react-router-dom";

/**
 * params 방식으로 데이터를 포함한 URL 이 요청되면
 *      content/:id 가 요청을 수락할 것이고
 *      전달된 데이터는 id 변수에 담겨서 컴포넌트로 전달된다.
 * 컴포넌트에서는 useParmas() hooks 함수를 사용하여 params 변수의 값을
 * getter(얻을) 할 수 있다.
 */

const BucketContent = () => {
  const params = useParams();
  return (
    <>
      <h1>content view</h1>
      <p>{params.id}</p>
    </>
  );
};

export default BucketContent;
