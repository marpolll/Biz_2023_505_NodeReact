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
        <td>{bbs.b_title}</td>
      </tr>
    );
  });

  return (
    <>
      <input type="text" />
      <table className={css.main}>
        <thead>
          <tr>
            <th>SEQ</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};

export default BBsList;
