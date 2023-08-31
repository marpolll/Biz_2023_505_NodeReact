// console.log("ddds");

// // 3의 배수를 찾는 함수
// const multi = (start, end) => {
//   const multiplesOf3 = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 3 === 0) {
//       multiplesOf3.push(i);
//     }
//   }
//   return multiplesOf3;
// }

// // 테스트 코드
// const start = 1;
// const end = 20;
// const result = multi(start, end);

// console.log(`[${start}, ${end}] 범위 내의 3의 배수:`);
// result.forEach((number) => {
//   console.log(`${number}은 3의 배수입니다.`);
// });

// const nums = [48, 22, 43];
// for (let i = 0; nums.length; i++) {
//   const result = multi(nums[i]);
//   if (result === i % 3) {
//     console.log(`테스트 케이스 ${nums[i]} 는 3의 배수입니다.`);
//   }
// }

// 3의 배수를 판별하는 함수
// const multi = (number) => {
//   return number % 3 === 0;
// };

// // 테스트 케이스 배열
// const nums = [48, 84, 12, 72, 48, 24, 66, 48];

// for (let i = 0; i < nums.length; i++) {
//   if (multi(nums[i])) {
//     console.log(`테스트 케이스 ${nums[i]} 는 3의 배수입니다.`);
//   } else {
//     console.log(`테스트 케이스 ${nums[i]} 는 3의 배수가 아닙니다.`);
//   }
// }

// const prime = (number) => {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// // 테스트 코드
// const numbers = [11, 61, 17, 11, 19, 7, 43, 71, 1];

// numbers.forEach((number) => {
//   if (prime(number)) {
//     console.log(`${number}은(는) 소수입니다.`);
//   } else {
//     console.log(`${number}은(는) 소수가 아닙니다.`);
//   }
// });

// // 소수를 판별하는 함수
// const Prime = (number) => {
//   if (number <= 1) {
//     return false;
//   }
//   if (number <= 3) {
//     return true;
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//     return false;
//   }
//   let i = 5;
//   while (i * i <= number) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//     i += 6;
//   }
//   return true;
// };

// const primeSum = (nums) => {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (prime(nums[i])) {
//       sum += nums[i];
//     }
//   }
//   return sum;
// };

// const nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
// if (primeSum(nums) === 36) {
//   console.log("Test 성공");
// } else {
//   console.log("Test 실패");
// }

// const nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
// if (evenSum(nums) === 206) {
//   console.log("Test 성공");
// } else {
//   console.log("Test 실패");
// }

function evenSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }
  return sum;
}

const nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
if (evenSum(nums) === 6) {
  console.log("Test 성공");
} else {
  console.log("Test 실패");
}
