import { useBBsContext } from "../provider/BBsProvider";
import css from "../css/BBsList.module.css";

const sampleData = [
  { b_seq: 0, b_nickname: "홍길동", b_title: "활빈당" },
  { b_seq: 1, b_nickname: "이몽", b_title: "남원" },
  { b_seq: 2, b_nickname: "성춘", b_title: "광한루" },
  { b_seq: 3, b_nickname: "임꺽", b_title: "도둑놈" },
  { b_seq: 4, b_nickname: "장녹", b_title: "여걸" },
];
const BBsList = () => {
  const { bbsList, setBBsList } = useBBsContext();

  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>
        <td>
          <img
            src={`/static/upload/${bbs.b_image}`}
            width="50px"
            alt={bbs.b_origin_name}
          />
          <span>{bbs.b_nickname}</span>
        </td>
        <td>{bbs.b_title}</td>
        <td>0</td>
      </tr>
    );
  });

  /*
  JS 의 join() 함수 : 배열의 요소를 하나의 문자열로 변환하는 함수
  const arr = [1,2,3,4,5,6]
  const str = arr.join(" ")
  str => "1 2 3 4 5 6" 과 같은 문자열을 만들어 낸다
  */

  return (
    <>
      <table className={css.main}>
        <thead>
          <tr>
            <th>SEQ</th>
            <th>작성자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};

export default BBsList;
