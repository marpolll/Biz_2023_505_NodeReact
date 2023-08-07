// import { useState } from "react";
// import "../css/Input.css";

// const Input = () => {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);

//   const inputChangeHandler1 = (e) => {
//     setNum1(e.target.value);
//   };

//   const inputChangeHandler2 = (e) => {
//     setNum2(e.target.value);
//   };
//   const Num1 = Number(num1);
//   const Num2 = Number(num2);
//   const [intNum1, intNum2] = [Number(num1), Number(num2)];
//   return (
//     <div>
//       <input placeholder="숫자1" value={Num1} onChange={inputChangeHandler1} />
//       <input placeholder="숫자2" value={Num2} onChange={inputChangeHandler2} />
//       <div>
//         {"덧셈 : "} {Num1}+{Num2} {"="} {Num1 + Num2}
//       </div>
//       <div>
//         {"뺄셈 : "} {Num1}-{Num2} {"="}
//         {Num1 < Num2 ? Num2 - Num1 : Num1 - Num2}
//       </div>
//       <div>
//         {"곱셉 : "} {Num1}*{Num2} {"="} {Num1 * Num2}
//       </div>
//       <div>
//         {"나눗셈 : "} {Num1}/{Num2} {"="} {Num1 / Num2}
//       </div>
//     </div>
//   );
// };
// export default Input;
