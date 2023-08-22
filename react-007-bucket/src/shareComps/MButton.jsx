import style from "./MButton.module.css";

const MButton = ({ children, type }) => (
  <button className={style.btn} type={type}>
    {children}
  </button>
);

export default MButton;
