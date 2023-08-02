const useState = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum];
};
const [num, setNum] = useState(0);

const nations = ["한국", "일본"];
console.log(nations);

const [n1, n2, n3] = nations;

const nation1 = nations[0];
const nation2 = nations[1];

console.log("n1", n1);
console.log("n2", n2);
console.log("n3", n3);

const nations2 = [...nations, "한국"];
console.log(nations2);

// nations 배열을 nations3 에 복사하라
const nations3 = nations;
console.log("1", nations);
console.log("3", nations3);

nations3[0] = "중국";
console.log("1", nations);
console.log("3", nations3);

const nations4 = [...nations];
nations4[0] = "러시아";
console.log("1", nations);
