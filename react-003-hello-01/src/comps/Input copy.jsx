import { useState } from "react";
import "../css/Input.css";

const InputC = () => {
  // const [num1, setNum1] = useState();
  // const [num2, setNum2] = useState();

  const [nums, setNums] = useState({ num1: 0, num2: 0 });

  // const inputChangeHandler = (e) => {
  //   setNums(e.target.value);
  // };

  // const inputChangeHandler2 = (e) => {
  //   setNums(e.target.value);
  // };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNums({ ...nums, [name]: value });

    // const { name, value } = e.target;
  };

  const Num1 = Number(nums.num1);
  const Num2 = Number(nums.num2);
  return (
    <div>
      <input
        name="num1"
        placeholder="숫자1"
        value={nums.num1}
        onChange={onChangeHandler}
      />
      <input
        name="num2"
        placeholder="숫자2"
        value={nums.num2}
        onChange={onChangeHandler}
      />
      <div>
        {"덧셈 : "} {Num1} + {Num2} {"="} {Num1 + Num2}
      </div>
      <div>
        {"뺄셈 : "} {Num1} &minus; {Num2} {"="}
        {Num1 < Num2 ? Num2 - Num1 : Num1 - Num2}
      </div>
      <div>
        {"곱셉 : "} {Num1} &times; {Num2} {"="} {Num1 * Num2}
      </div>
      <div>
        {"나눗셈 : "} {Num1} &divide; {Num2} {"="} {Num1 / Num2}
      </div>
    </div>
  );
};
export default InputC;
