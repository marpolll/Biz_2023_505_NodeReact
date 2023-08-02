// sub.js 에서 export default 로 내보낸 함수
// 내가 필요한 아무이름이나 지정해서 내보낼수 있다.
// export default 가 아닌 함수는 {함수이름} 으로 import 해야한다.

// 아래는 한번에 호출
import RtMessage, { sum, sub, mul } from "./src/sub.js";

// 아래는 따로 호출
// import RtMessage from "./src/sub.js";
// import { sum, sub, mul } from "./src/sub.js";

console.log(sum(10, 20));
console.log(sub(10, 20));
console.log(mul(10, 20));

console.log(RtMessage());

const address = [
  { 이름: "가", 나이: 12 },
  { 이름: "나", 나이: 11 },
];

console.log(address);
console.table(address);
console.dir(address);
