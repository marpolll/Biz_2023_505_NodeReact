import { useBBsContext } from "../provider/BBsProvider";
import css from "../css/BBsList.module.css";
import "../css/imagelist.css";
import "../css/search.css";
import Search from "./BBsSearch";

const BBsList = () => {
  const { bbsList, setBBsList } = useBBsContext();

  const bbsItems = bbsList.map((bbs) => {
    return (
      <div className="wrap">
        <div className="fixed_img_col">
          <ul>
            <li key={bbs.b_seq} data-seq={bbs.b_seq}>
              <a href="#">
                <span className="thum">
                  <img
                    src={`/static/upload/${bbs.b_image}`}
                    width="90px"
                    height="120px"
                    alt={bbs.b_origin_name}
                  />
                  <em>다운로드</em>
                </span>
                <strong>{bbs.b_title}</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <>
      <table className={css.main}>
        <tbody>{bbsItems}</tbody>
        <Search />
      </table>
    </>
  );
};

export default BBsList;
