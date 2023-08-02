/**
 * JSON 객체(JavaScript Object Notation)
 * [key:value] 쌍으로 구성된 데이터 type
 * */
const obj = {
  이름: "홍",
  나이: 12,
  전화: "010-1111-1111",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchKey = "이름";
console.log(obj[searchKey]);

// JSON 배열
const address = [
  { 이름: "홍", 나이: 16, 전화: "1111" },
  { 이름: "리", 나이: 12, 전화: "2222" },
  { 이름: "김", 나이: 11, 전화: "3333" },
];

console.log(address[1].이름);
console.log(address[1].나이);
console.log(address[1].전화);
address.forEach((item) => {
  console.log("이름", item.이름, "나이", item.나이);
});
