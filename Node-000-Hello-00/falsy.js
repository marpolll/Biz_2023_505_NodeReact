// false, falsy, falsey 라는 개념
// boolean type
const yes = true;
const no = false;

const strNull = null;
const strBlack = "";
const numZero = 0;
let valUndefined;
const numNaN = NaN;
const notNum = 0n;

// 변수 strNull 의 데이터 type 이 무엇인가??
console.log(typeof strNull);

console.log(typeof strBlack);

console.log(typeof numZero);

console.log(typeof valUndefined);

console.log(typeof numNaN);

console.log(typeof notNum);

// object
// string
// number
// undefined
// number
// bigint

// 위에서 선언한 변수들을 if() 명령문에 포함하거나
// ! 연산자를 동반하면 이 변수들의 성질이 true, false 인가? 로 바뀐다.
// falsy, falsey 형 데이터 라고 한다.
if (!strNull) console.log("strNull 은", typeof strNull);

if (!strBlack) console.log(typeof strBlack);

if (!numZero) console.log(typeof numZero);

if (!valUndefined) console.log(typeof valUndefined);

if (!numNaN) console.log(typeof numNaN);

if (!notNum) console.log(typeof notNum);

// strNull 은 object
// string
// number
// undefined
// number
// bigint

const num = 0;
if (num === 0) {
  console.log("num 는 0이다.");
} else {
  console.log("num 는 0 이 아니다.");
}
if (!num) console.log("진짜로 num 는 0이네??");

const strName = null;
if (!strName) console.log("이름이 없어요");
if (strName === null || strName === "") console.log("no name");

console.log(strName || "lee");

const 구매자 = strName || "구매자없음";
const 판매자 = "판매자없음";
if (strName !== null && strName !== "") {
  판매자 = strName;
}
